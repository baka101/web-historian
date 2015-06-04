// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.

var archive = require('../helpers/archive-helpers');
var _ = require('underscore');

archive.readListOfUrls(function (array) {
  _.each(array, function (item) {
    if (!(item === '')){
      archive.downloadUrls(item);
    }
  });
});
