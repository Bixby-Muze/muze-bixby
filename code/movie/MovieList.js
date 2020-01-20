var http = require('http');
var config = require('config');
var console = require('console');

module.exports.function = function movieList () {
  
  var options = {
    format: 'json',
    query: {
      movieNm: "",
      directorNm: "",
      openStartDt: "2019",
      openEndDt: "2019"
    }
  };

  const fakeData = http.getUrl(config.get("apiBaseUrl")+"movieList", options);
  console.log(fakeData['movieListResult']['movieList'])
  // console.log(config.get('baseUrl'))
  // console.log(fakeData);

  return fakeData['movieListResult']['movieList']
}
