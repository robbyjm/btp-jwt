# Getting Started

Install dependencies in both root directory and app directory. Put default-env.json in both root and app directory.

root directory default-env.json
```json
{
    "VCAP_SERVICES":{
        "destination": [
            "credentials": {

            }
        ],
        "xsuaa": [
            "credentials": {
            }
        ]
    }
}
```

app directory defualt_env.json
```json
{
    "destinations": [
    {
      "name": "srv-api",
      "url": "http://localhost:4004",
      "forwardAuthToken": true
    }
  ],
    "VCAP_SERVICES":{
        "destination": [
            "credentials": {

            }
        ],
        "xsuaa": [
            "credentials": {
            }
        ]
    }
}
```

| file                                                                                           | function                             | line |
| ---------------------------------------------------------------------------------------------- | ------------------------------------ | ---- |
| `node_modules\@sap-cloud-sdk\connectivity\dist\scp-cf\identity-service.js`                     | exchangeToken                        | 37   |
| `node_modules\@sap-cloud-sdk\connectivity\dist\scp-cf\destination\destination-from-service.js` | getDestinationFromDestinationService | 59   |
| `node_modules\@sap\xssec\lib\xssec.js`                                                         | validateConfig                       | 23   |

## Next Steps

`$Env:DEBUG='xsenv','xssec:*';cds serve --with-mocks --in-memory?`

## Learn More

https://www.npmjs.com/package/@sap/xssec

https://www.npmjs.com/package/@sap/approuter

https://www.npmjs.com/package/@sap/xsenv

https://www.npmjs.com/package/@sap/cds-dk

https://www.npmjs.com/package/debug
