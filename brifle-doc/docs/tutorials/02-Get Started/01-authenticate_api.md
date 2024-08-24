# Authenticate with API

## Fetch Bearer Token

A bearer token can be requested via the following endpoint:
- [Login Endpoint](/docs/api/web-api-controller-auth-controller-create)


## Refresh Token

Please be aware that the token will expire within two hours. Therefore, it is advisable to request a new bearer token from your service provider. If the current token is still valid, it will be returned. If you would like to request a new token, please specify a session.

## Sessions

It is possible to specify a custom session ID, which is particularly useful in situations where an application is running in multiple processes or where multiple applications are accessing the app. It is recommended that the session token is generated randomly or that a hash of the current timestamp is used. 