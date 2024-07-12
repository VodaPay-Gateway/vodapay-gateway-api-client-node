/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* gets the specified data.
*
* data String The data. (optional)
* returns File
* */
const callBack_Get = ({ data }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        data,
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
*
* merchantId String 
* returns File
* */
const callBack_NiRedirect = ({ merchantId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        merchantId,
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
* gets the specified data.
*
* input WebHookModel 
* returns File
* */
const callBack_NiWebhook = ({ input }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        input,
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
  callBack_Get,
  callBack_NiRedirect,
  callBack_NiWebhook,
};
