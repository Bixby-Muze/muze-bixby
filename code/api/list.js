const endpoint = require('./endpoint.json');
const apiUrl = `${endpoint.base}${endpoint.list}`;

const hello = (keyword) => {
  return ['keyword', 'hello world', 'hello world2'];-
}

export default hello;