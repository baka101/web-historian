var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
// require more modules/folders here!

var routes = {
  '/': './public/index.html',
  '/www.google.com': '../archives/sites/www.google.com'
};

var actions = {
  'GET': function(request, response) {
    helpers.serveAssets(response, routes[request.url], null);
  },
  'POST': function(request, response) {
    archive.addUrlToList(request, response);
  }
};


exports.handleRequest = function (request, response) {
  // console.log('==============>' + request.method + ' REQUEST | URL: ' + request.url);
  actions[request.method](request, response);

  // response.end(archive.paths.list);
};