const endpoint = require('./endpoint');
const apiUrl = endpoint.base + endpoint.list;

function hello(keyword) {
  return ['keyword', 'hello world', 'hello world2'];
}

module.exports.function = hello;