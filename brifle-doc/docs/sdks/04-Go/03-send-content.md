# Send Content
## Simple Content
```go

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
pathToFile := "./test/welcome.pdf"
tenant := "265e44de-a6b6-3eac-cace-ca31a321a9ea"

ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
defer cancel()

// read file content
fileContent, err := os.ReadFile(pathToFile)
if err != nil {
    t.Errorf("Failed to read file: %v", err)
    return
}
// convert file content to base64
fileContentBase64 := sdk.Base64Encode(fileContent)

document1 := content.ContentItem{
    Content: fileContentBase64,
    Type:    sdk.String("application/pdf"),
}

req := content.SendContentRequest{
    To: &content.ReceiverData{
        BirthInformation: &content.BirthInformationReceiver{
            FirstName:    &firstName,
            LastName:     &lastName,
            DateOfBirth:  &dateOfBirth,
            PlaceOfBirth: &placeOfBirth,
        },
    },
    Type:    sdk.String(content.Letter),
    Body:    &[]content.ContentItem{document1},
    Subject: sdk.String("Welcome to Brifle from Go!"),
}

res, status, err := content.SendContent(brifleClient, ctx, &tenant, &req)
if err != nil {
    t.Errorf("SendContent failed: %v", err)
    return
}
if status.HttpStatus != 200 {
    t.Errorf("Expected status code 200, got %d", status.HttpStatus)
    return
}
if res == nil {
    t.Error("SendContent response is nil")
    return
}

```