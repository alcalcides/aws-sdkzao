AWS SDKzao
The user-friendly tool that acts on AWS accounts

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Set up

1. AWS Account Programmatic Credentials

AWS SDKzao use programatic aws authentication method, so be sure the correct credentials are set up in the file `~/.aws/credentials`, i.e. `access key ID`, `secret access key` and the correspondent `profile name`. 

Unless the profile is the `default`, certify the environment variable AWS_PROFILE keeps the desired profile name, accordingly with the file `~/.aws/credentials`. 


2. Instalation

```sh
npm install
npm build
npm start
```

## References
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html
