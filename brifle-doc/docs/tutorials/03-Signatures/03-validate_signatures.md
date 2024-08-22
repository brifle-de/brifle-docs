# Validate Signatures
The validation is automatically done, when a user signs a documents. However, you can validate the signature manually.

## Manual Validation

### 1. Fetch Exported Signature
It is not possible to copy the signature directly out of the signature block. Instead the signatures needs to be exported. During the exporting process the signed document gets attached to the signature file.

### 2. Install a signature validator
The validation is done with a signature validator. The following gives an example in python.

```python
a=2
b=3
if(a<b) 
    a = a + b
```