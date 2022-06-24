/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Ecwids the payment.
*
* data String The data. (optional)
* returns File
* */
const plugin_EcwidPayment = ({ data }) => new Promise(
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
* Ecwids the payment callback.
*
* data String The data. (optional)
* returns File
* */
const plugin_EcwidPaymentCallback = ({ data }) => new Promise(
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

module.exports = {
  plugin_EcwidPayment,
  plugin_EcwidPaymentCallback,
};
