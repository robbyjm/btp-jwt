const { retrieveJwt, getDestinationFromDestinationService } = require('@sap-cloud-sdk/connectivity')

module.exports = class say {
    hello(req) {
        const jwt = retrieveJwt(req)
        const destination = getDestinationFromDestinationService({
          destinationName: "your-destination-name",
          jwt: jwt,
        });
        return destination;
    }
}