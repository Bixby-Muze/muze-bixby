const endpoint = require('./endpoint');
const apiUrl = endpoint.base + endpoint.list;

function hello(keyword) {
  return keyword + "??";
}

module.exports.function = hello;