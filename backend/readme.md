The sls directory contains the serverless scripts to setup the aws infrastructure and the lambdas.

The src directory holds the source code used by the lambda handlers.
Webpack is used to assist the serverless find the lambda src code and package it nicely while converting ts -> js.

Currently the package.json is sharedd between both sls and src however they can be separated if the need arises.