# Validate Signatures
The validation is automatically done, when a user signs a documents. However, you can validate the signature manually.

## Manual Validation

### 1. Fetch Exported Signature
It is not possible to copy the signature directly out of the signature block. Instead the signatures needs to be exported. During the exporting process the signed document gets attached to the signature file.


### 2. Install a signature validator
The validation is done with a signature validator. The following gives an example in python.

```python
from lxml import etree
from signxml import XMLSigner, XMLVerifier, SignatureConfiguration
from cryptography.hazmat.primitives.asymmetric import dsa, ec, rsa, utils
import base64
import struct

ca_pem_file = "./ca_sandbox.pem"
signed_root = open('./signature.xml').read()
config = SignatureConfiguration(
     expect_references=2,
)
verified_data = XMLVerifier().verify(signed_root, ca_pem_file=ca_pem_file, expect_config=config)

# iterate over the references
for reference in verified_data:
    print(reference.signed_xml)

```