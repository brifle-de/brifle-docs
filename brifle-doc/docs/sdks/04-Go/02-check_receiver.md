# Check Receiver

```go
// get env variables for credentials
credentials := middleware.Credentials{
    ApiKey:    os.Getenv("API_KEY"),
    ApiSecret: os.Getenv("API_SECRET"),
}
brifleClient, err := sdk.NewClient(os.Getenv("ENDPOINT"), credentials)
if err != nil {
    t.Errorf("Failed to create Brifle client: %v", err)
    return nil
}

firstName := "Max"
lastName := "Mustermann"
dateOfBirth := "1970-01-01"
placeOfBirth := "Stuttgart"

receiverData := content.ReceiverData{
    BirthInformation: &content.BirthInformationReceiver{
        FirstName:    &firstName,
        LastName:     &lastName,
        DateOfBirth:  &dateOfBirth,
        PlaceOfBirth: &placeOfBirth,
    },
}

ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
defer cancel()

// Test ReceiverExists
receiverRes, status, err := content.CheckReceiver(brifleClient, ctx, &receiverData)

if err != nil {
    t.Errorf("ReceiverExists failed: %v", err)
    return
}
if status.HttpStatus != 200 {
    t.Errorf("Expected status code 200, got %d", status.HttpStatus)
    return
}
if *receiverRes.Receiver.Type != "birth_info" {
    t.Errorf("Expected receiver type 'birth_info', got '%s'", *receiverRes.Receiver.Type)
    return
}

```