# API Keys

To utilize the API, authentication is required. This process involves identifying either the sender or receiver and granting permission. To simplify authentication—especially for third-party applications—users can generate an **API Key**. Each key is:
- **Scoped**: Restricted to specific permissions.
- **Secured**: Paired with an **API Secret** for validation.

---

## Generate a Key as a User

1. Log in to the **Webapp**.
2. Navigate to **Profile > API Keys**.
3. Click **Generate Key**.
4. **Save the Key and Secret securely** (they will not be shown again).

**Capabilities:**
The generated key allows the user to:
- Send emails.
- Retrieve documents via unique IDs.

---
## Fetch Key as a Third-Party Provider

To obtain credentials as a third-party provider:
1. The user must submit their credentials **via a secure channel**.
2. The method depends on the application:
   - **User Interface**: Provide a form for users to input/retrieve credentials.
   - **Self-Hosted Services**: Use **environment variables** (e.g., `API_KEY=your_key_here`) to store keys securely.

**Note:**
Never expose secrets in client-side code or version control.