/**
 * The TokenController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TokenService');
const token_Authenticate = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Authenticate);
};

const token_Block = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Block);
};

const token_Cancel = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Cancel);
};

const token_Create = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Create);
};

const token_List = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_List);
};

const token_Remove = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Remove);
};

const token_SetDefault = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_SetDefault);
};

const token_Unblock = async (request, response) => {
  await Controller.handleRequest(request, response, service.token_Unblock);
};


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
