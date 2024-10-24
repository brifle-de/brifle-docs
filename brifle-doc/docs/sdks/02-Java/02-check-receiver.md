
# Check for Receiver existence
```java
Api api = new Api(ApiMode.SANDBOX);

    // read the key and secret from the environment
    String secret = System.getProperty("BRIFLE_SECRET");
    String key = System.getProperty("BRIFLE_KEY");

    // authenticate with the credentials
    SuccessfulAuthenticationResponse response = api
        .auth()
        .authenticate(key, secret)
        .getData();

    // this token is valid for 2 hours
    String token = response.getAccessToken();
    

    ReceiverRequest request = ReceiverRequest
            .byEmail()
            .withEmail("email_not_exist@brifle.de")
            .withDateOfBirth("1970-01-01")
            .withName("Max Mustermann")
            .buildRequest();

    ApiResponse<CheckReceiverResponse> re = api.content().checkReceiver(token, request);
    // does not exist
    assert re.isError(); 
    assert re.getError().getCode() == 40401;
    assert re.getError().getStatus() == 404;


    // does exist
    assert !re.isError(); 
    assert re.getData() != null;
```
