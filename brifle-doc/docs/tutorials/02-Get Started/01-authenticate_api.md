# Authenticate with API

API authentication is required to access protected endpoints. This process involves obtaining a **Bearer Token**, which must be included in the `Authorization` header of your requests. Below are the steps and best practices for authentication.

---

## Fetch Bearer Token

To authenticate, request a **Bearer Token** using the following endpoint:

- **[Login Endpoint](/docs/api/web-api-controller-auth-controller-create)**
  This endpoint expects valid credentials (e.g., API key, username/password, or OAuth2 client credentials) in exchange for a short-lived access token.

**Example Request:**
```http
POST /auth/login
Content-Type: application/json

{
  "api_key": "your_api_key_here",
  "session_id": "optional_custom_session_id"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 7200,
  "token_type": "Bearer"
}
```

---

## Refresh Token

Bearer tokens are **time-limited** and expire after **2 hours**. To maintain uninterrupted access:

- **Automatically refresh** the token before expiration.
- If the current token is still valid, the endpoint will return the same token.
- To force a new token, specify a **unique session ID** (see [Sessions](#sessions)).

**Best Practice:**
Implement a token refresh mechanism in your application to avoid disruptions.

---
## Sessions

A **session ID** can be specified to manage authentication across multiple processes or applications. This is useful for:
- Distributed systems (e.g., microservices, serverless functions).
- Multi-tenant applications where isolation is required.
- To force a new token instead of getting the same token if the current one is still valid.

**Session ID Generation:**
- Use a **random string** (e.g., UUID) or a **hash of the current timestamp** to ensure uniqueness.
- Example: `session_id = sha256(timestamp + random_salt)`

**Why Use Sessions?**
- Prevents token collisions in concurrent environments.
- Allows revocation of specific sessions if compromised.
- Issue a fresh token. A token is reused if it is not expired yet. To force a new token, specify a unique session ID.

---
---
## Additional Information

- **Scoped API Keys:**
  API keys are restricted to specific permissions (e.g., read-only, write-access). Ensure your key has the required scopes for the endpoints you intend to use.

- **Revokable API Keys:**
  Compromised or unused API keys can be revoked via your service provider’s dashboard. Always rotate keys periodically for security.

- **Security Note:**
  Never hardcode tokens or keys in client-side code. Use environment variables or secure vaults (e.g., AWS Secrets Manager, HashiCorp Vault).