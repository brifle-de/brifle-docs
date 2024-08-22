# Digital Signatures

## How the work

Digital Signatures are based on aymmetric cryptography. Meaning there exist a private key, which is only known to the signer and a public key, which is known to everyone, who wants to verify that a signature is valid. The public key is stored in a certificate. This certificate gives a proof that the public key actually belongs to the signer. To make sure that the signer is identified and has not generate a key without proof, the certificate is signed by a authorised authority, which again adds there certificate to the other certifcate. This generate a chain, the certificate chain. The top certificate, must be trusted and is called the Root Certificate Authoritiy (Root CA). Brifle is are Root CA. We identify the users and afterwards issue the certificate, which proof that a public key is actual bond to a user. The user keeps the private key, which is stored on the users device. 

## Brifle Certificate

### Sandbox
The following certificate chain is used for the sandbox. While it possible to verify those signatures, they have no legal binding.
```

```
### Production
The following certificate chain is used for the production environment. Only signatures signed with this certificates are valid and legal binding. The root Certificate will not change. The second level certificate will chain in future. Depending on the used library it is enough only to trust the root CA.

```

```