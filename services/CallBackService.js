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

module.exports = {
  callBack_Get,
};
