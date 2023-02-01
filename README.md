AWS SDKzao
The user-friendly tool that acts on AWS accounts

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Set up

1. AWS Account Programmatic Credentials

The simplest way to config the credentials is define the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in the file `.env`, but that can be insecure. So, always that is possible, add the AWS programatic credentials in the file `~/.aws/credentials` and let the environment variable `AWS_PROFILE` points to desired profile name. You can set this variable using the operating system or the file .env, to have effect only for AWS SDKzao.

2. Instalation

- Download the project
- Make a copy of `.env.example`, let its name be `.env` and set up the environment variables
- Use the known npm commands

```sh
npm install
npm build
npm start
```

## References
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html
