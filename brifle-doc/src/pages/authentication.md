---
id: authentication
title: Authentication
sidebar_label: Authentication
sidebar_position: 2
description: API key authentication, scoped tokens, and role-based access for multi-tenant Brifle setups.
---

# Authentication

Every request to the Brifle API must be authenticated using a Bearer token. Tokens are either long-lived **API keys** for server-to-server use, or short-lived **scoped tokens** for more constrained access.

---

## API keys

API keys are the primary authentication mechanism. They are created per tenant in the Brifle dashboard.

```bash title="Using an API key"
curl 'https://sandbox-api.brifle.de/v1/content' \
  -H 'Authorization: Bearer brfl_live_sk_...'
```

### Key format

| Prefix | Environment | Use |
|---|---|---|
| `brfl_live_sk_` | Production | Server-side only — never expose in client code |
| `brfl_test_sk_` | Sandbox | Development and CI/CD |

:::danger Keep your keys secret
API keys have full access to your tenant. Never commit them to version control or include them in client-side code. Use environment variables.
:::

### Rotating keys

Keys can be rotated at any time from the dashboard or via the API:

```bash
POST /v1/api-keys/:key_id/rotate
```

The old key remains valid for **24 hours** after rotation to allow a seamless rollover.

---

## Scoped tokens

Scoped tokens have restricted permissions and a configurable expiry. They're useful for:

- Giving a service access to a single operation
- Short-lived integrations or CI pipelines
- Delegating access without sharing a full API key

```bash title="Create a scoped token"
curl -X POST 'https://sandbox-api.brifle.de/v1/tokens' \
  -H 'Authorization: Bearer brfl_live_sk_...' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "scopes": ["content:send", "content:read"],
    "expires_in": 3600,
    "description": "CI pipeline token"
  }'
```

```json title="Response"
{
  "token": "brfl_scoped_tk_eyJhbGci...",
  "scopes": ["content:send", "content:read"],
  "expires_at": "2024-11-01T11:00:00Z"
}
```

---

## Available scopes

| Scope | Permission |
|---|---|
| `content:send` | Send documents to recipients |
| `content:read` | Read document status and metadata |
| `content:delete` | Delete documents |
| `webhooks:write` | Create and manage webhook endpoints |
| `webhooks:read` | List webhook endpoints and event history |
| `recipients:read` | Read recipient data |
| `recipients:write` | Create and update recipients |
| `audit:read` | Read the audit log |
| `settings:write` | Update tenant settings |
| `tokens:write` | Create and revoke scoped tokens |
| `*` | Full access (equivalent to an API key) |

---

## Role-based access (multi-tenant)

Brifle supports multi-tenant deployments where multiple organisations share a platform but have isolated data. Each tenant has its own:

- API keys and scoped tokens
- Document storage and audit log
- Settings and retention policies
- Webhook endpoints

### Tenant-scoped requests

Most endpoints are scoped to a tenant via the URL:

```
POST /v1/content/send/:tenant
```

Where `:tenant` is your tenant ID (visible in the dashboard under **Settings → General**).

### Cross-tenant access

Platform administrators can be granted cross-tenant read access using a special `admin` scope. This is intended for platform operators, not regular integrations.

```json title="Admin token with cross-tenant access"
{
  "scopes": ["admin:read"],
  "tenant": "*"
}
```

---

## Token lifecycle

```
  Create token
       │
       ▼
   Active ──────────────────────────────────────────┐
       │                                             │
       │ expires_at reached              manually revoked
       │                                             │
       ▼                                             ▼
   Expired                                       Revoked
       │                                             │
       └────────────── No longer usable ─────────────┘
```

Expired and revoked tokens are retained in the audit log but cannot be re-activated.

---

## Revoking tokens

```bash
DELETE /v1/tokens/:token_id
```

Revocation takes effect immediately — in-flight requests using the token will be rejected.

---

## Sandbox vs. production

| | Sandbox | Production |
|---|---|---|
| Base URL | `sandbox-api.brifle.de` | `api.brifle.de` |
| Token prefix | `brfl_test_sk_` | `brfl_live_sk_` |
| Data isolation | Completely separate | — |
| Rate limits | 60 req/min | 600 req/min |
| Charges | No | Yes |
| Deliveries | Simulated (no real delivery) | Real |

:::tip
Always use sandbox keys during development. Sandbox and production tokens are not interchangeable — a production key will fail against the sandbox URL.
:::

---

## Security best practices

- Store API keys in environment variables, never in code
- Use scoped tokens with the minimum required permissions
- Rotate keys immediately if you suspect they've been compromised
- Enable audit log alerts for unusual token activity
- Set short `expires_in` values for CI/automation tokens

---

## Next steps

- [API overview →](/docs/api/overview)
- [Webhook signature verification →](/docs/webhooks/overview)
- [Compliance & data handling →](/docs/concepts/compliance)