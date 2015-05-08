var fs = require('fs');
var instapromise = require('instapromise');

module.exports = function (jsonFile) {
  return fs.promise.readFile(jsonFile, 'utf8').then(function (json) {
    return JSON.parse(json);
  });
}
