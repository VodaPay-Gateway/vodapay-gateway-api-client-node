/**
 * The CallBackController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CallBackService');
const callBack_Get = async (request, response) => {
  await Controller.handleRequest(request, response, service.callBack_Get);
};

const callBack_NiRedirect = async (request, response) => {
  await Controller.handleRequest(request, response, service.callBack_NiRedirect);
};

const callBack_NiWebhook = async (request, response) => {
  await Controller.handleRequest(request, response, service.callBack_NiWebhook);
};


module.exports = {
  callBack_Get,
  callBack_NiRedirect,
  callBack_NiWebhook,
};
