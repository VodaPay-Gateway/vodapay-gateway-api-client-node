/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Initiate authentication of token
*
* model VodaPayGatewayAuthenticateToken VodaPayGatewayTokenResponse.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Authenticate = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Block a token.
*
* model VodaPayGatewayToken VodaPayGatewayToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Block = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Cancel a token.
*
* model VodaPayGatewayToken VodaPayGatewayToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Cancel = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create the specified model.
*
* model VodaPayGatewayCreateToken VodaPayGatewayCreateToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Create = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a list of tokens.
*
* model VodaPayGatewayListToken VodaPayGatewayListToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenListResponse
* */
const token_List = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Removes a token.
*
* model VodaPayGatewayRemoveToken VodaPayGatewayRemoveToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Remove = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Set token as default.
*
* model VodaPayGatewayToken VodaPayGatewayToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_SetDefault = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Unblock a token.
*
* model VodaPayGatewayToken VodaPayGatewayToken.
* apiKey String The API key. (optional)
* returns VodaPayGatewayTokenResponse
* */
const token_Unblock = ({ model, apiKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        model,
        apiKey,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  token_Authenticate,
  token_Block,
  token_Cancel,
  token_Create,
  token_List,
  token_Remove,
  token_SetDefault,
  token_Unblock,
};
