# Api Keys

In order to utilise the API capabilities, it is necessary to authenticate against the API. The authentication process requires an identified party, either the sender or the receiver, to authenticate themselves and grant permission. 
To streamline the authentication process and avoid the need for regular authentication and permission granting to third-party applications, users can issue an API key. This key is bound to a particular scope and secured by an API secret. 


## Generate a Key as a User

1. Login into the Webapp 
2. Go to Profile > API Keys
3. Click on Generate Key
4. Note the Secret and the Key

The generated key will enable the user to send emails and retrieve documents via their unique ID.

## Fetch Key as Third Party Provider 

The user is required to submit their credentials via a secure channel. The method of obtaining the credentials is dependent on the specific application in question. One potential solution is to provide a user interface for credential retrieval, or alternatively, to utilise environment variables if the services in question are self-hosted.