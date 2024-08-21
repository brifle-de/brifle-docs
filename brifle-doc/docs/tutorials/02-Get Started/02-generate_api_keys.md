# Api Keys

In order to use the API capabilities it is required to authenticate against the API. For the Authentication process an identified party, either the sender or the receiver need to authenticate themself and grant permission. 
To avoid that the sender or receiver needs to authenticate regulary and give a third party application permission to act on their behave, it user can issue an API key. This API Key is bound to a particular scope and is secured by a API Secret. 


## Generate a Key as a User

1. Login into the Webapp 
2. Go to Profile > API Keys
3. Click on Generate Key
4. Note the Secret and the Key

The generated Key with give permission to send mail and fetch an document via its ID.

## Fetch Key as Third Party Provider 

The user needs to submit their credentials on a secure channel to you. The way of obtaining the credentials depends on your application. You could provide an UI to get the credentials or fetch Environment Variables if those services are self hosted.