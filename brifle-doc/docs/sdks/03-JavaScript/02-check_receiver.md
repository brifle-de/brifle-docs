# Check Receiver

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

```