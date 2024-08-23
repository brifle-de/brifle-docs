# SDKs

## Java SDK

The Code for the Java SDK can be found here:

- https://github.com/brifle-de/brifle-sdk-java

### Examples

#### Check for Receiver existence
```java
Api api = new Api(ApiMode.SANDBOX);

    // read the key and secret from the environment
    String secret = System.getProperty("BRIFLE_SECRET");
    String key = System.getProperty("BRIFLE_KEY");

    // authenticate with the credentials
    SuccessfulAuthenticationResponse response = api
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

    ApiResponse<CheckReceiverResponse> re = api.checkReceiver(token, request);
    // does not exist
    assert re.isError(); 
    assert re.getError().getCode() == 40401;
    assert re.getError().getStatus() == 404;


    // does exist
    assert !re.isError(); 
    assert re.getData() != null;
```
#### Send Content

```java
        // read from resources or other source
        InputStream contentStream = this.getClass().getClassLoader().getResourceAsStream("Willkommensbrief-4.pdf");
        byte[] content = contentStream.readAllBytes();

        // encode pdf to base64
        String base64 = java.util.Base64.getEncoder().encodeToString(content);

        String token = getToken();

        Api api = new Api(ApiMode.SANDBOX);

        ReceiverRequest to = ReceiverRequest
                .byEmail()
                .withEmail(System.getProperty("BRIFLE_EXISTING_USER_EMAIL"))
                .withDateOfBirth(System.getProperty("BRIFLE_EXISTING_USER_DATE_OF_BIRTH"))
                .withName(System.getProperty("BRIFLE_EXISTING_USER_FULLNAME"))
                .buildRequest();


        String tenant = System.getProperty("BRIFLE_TEST_TENANT");
        SendContentRequest request = SendContentRequest.builder()
                .withSubject("Willkommensbrief")
                .withTo(to)
                .addPdfToBody(base64)
                .withType(MailTypes.LETTER)
                .build();

        SendContentResponse res = api.sendContent(token, tenant, request).getData();
        assert content != null;

```