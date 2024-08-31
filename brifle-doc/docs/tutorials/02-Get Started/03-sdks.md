# SDKs

## Java SDK

The Code for the Java SDK can be found here:

- https://github.com/brifle-de/brifle-sdk-java



### Check for Receiver existence
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
### Send Content

```java
        // read from resources or other source
        InputStream contentStream = this.getClass().getClassLoader().getResourceAsStream("Willkommensbrief-4.pdf");
        byte[] content = contentStream.readAllBytes();

        // encode pdf to base64
        String base64 = java.util.Base64.getEncoder().encodeToString(content);

        Api api = new Api(ApiMode.SANDBOX);

        // authenticate with the credentials
        SuccessfulAuthenticationResponse response = api
                .auth()
                .authenticate(key, secret)
                .getData();

        // this token is valid for 2 hours
        String token = response.getAccessToken();

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

        SendContentResponse res = api.content().sendContent(token, tenant, request).getData();
        assert content != null;
```

### Send Content with Signature Request
```java
        InputStream contentStream = this.getClass().getClassLoader().getResourceAsStream("Willkommensbrief-4.pdf");
        byte[] content = contentStream.readAllBytes();
                // to base64
        String base64 = java.util.Base64.getEncoder().encodeToString(content);

                        // read the key and secret from the environment
        String secret = System.getProperty("BRIFLE_SECRET");
        String key = System.getProperty("BRIFLE_KEY");

        Api api = new Api(ApiMode.SANDBOX);

        // authenticate with the credentials
        SuccessfulAuthenticationResponse response = api
                .auth()
                .authenticate(key, secret)
                .getData();

        // this token is valid for 2 hours
        String token = response.getAccessToken();

       

        ReceiverRequest to = ReceiverRequest
                .byEmail()
                .withEmail(System.getProperty("BRIFLE_EXISTING_USER_EMAIL"))
                .withDateOfBirth(System.getProperty("BRIFLE_EXISTING_USER_DATE_OF_BIRTH"))
                .withName(System.getProperty("BRIFLE_EXISTING_USER_FULLNAME"))
                .buildRequest();

        // request signature reference
        CreateSignatureReferenceRequest request = CreateSignatureReferenceRequest
                .builder()
                .addField("FeldName", "FeldRolle","Der Zweck")
                .addField("FeldName2", "FeldRolle2","Der Zweck2")
                .build();

        ApiResponse<CreateSignatureReferenceResponse> res = api
                .signatures()
                .createSignatureReference(token, System.getProperty("BRIFLE_TEST_TENANT"), request);

       
        String tenant = System.getProperty("BRIFLE_TEST_TENANT");

        // prepare signature request
        SendContentRequest.SignatureInfo signatureInfo = SendContentRequest.SignatureInfo
                .builder()
                .withSignatureReference(res.getData().getId())
                .addSenderSignature("FeldName")
                .addReceiverSignature("FeldName2")
                .build();

        // prepare content
        SendContentRequest request2 = SendContentRequest.builder()
                .withSubject("Testvertrag")
                .withTo(to)
                .addPdfToBody(base64)
                .withType(MailTypes.CONTRACT)
                .withSignatureInfo(signatureInfo)
                .build();

        // send content
        SendContentResponse res3 = api.content().sendContent(token, tenant, request2).getData();
        String id = res3.getId();     


        assert content != null;
```