#!/bin/bash

go get ./...
export GOOS=linux
export GOARCH=amd64

go build -o spotify-backend .
zip function.zip spotify-backend
aws lambda update-function-code --function-name spotify-backend --zip-file fileb://$PWD/function.zip --cli-connect-timeout 6000

rm spotify-backend
rm function.zip