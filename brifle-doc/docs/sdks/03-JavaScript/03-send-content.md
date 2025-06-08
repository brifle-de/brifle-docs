# Send Content
## Simple Content
```typescript
import { ApiV1 } from "../../../src/api/api";
import fs from "fs";

const endpoint = "https://internaltest-api.brifle.de"
const api = ApiV1.production();
const auth = api.authentication()
const content = api.content()

const key = process.env.API_TEST_KEY as string
const secret = process.env.API_TEST_SECRET as string    
const tenantId = process.env.API_TEST_TENANT_ID as string

const contentPath = "path/to/file.pdf"
const contentBuffer = fs.readFileSync(contentPath)
const contentBase64 = contentBuffer.toString("base64")

const firstName = "Max"
const lastName = "Mustermann"
const dateOfBirth = "1970-01-01"
const placeOfBirth = "Stuttgart"

const receiver = {
    first_name: firstName,
    last_name: lastName,
    date_of_birth: dateOfBirth,
    place_of_birth: placeOfBirth
}        
const receiverCheck = await content.checkReceiver({
    birth_information: receiver
})

//  expect(receiverCheck.isSuccess).toBe(true)

const contentRes = await content.sendContent(tenantId, {
    to: {
        birth_information: receiver
    },
    body: [
        {
            type: "application/pdf",
            content: contentBase64
        }
    ],
    subject: "Test JS SDK",
    type: "letter",            
})

// optional: fetch the content
const getConent = await content.getContent(contentRes.data?.id as string)

```