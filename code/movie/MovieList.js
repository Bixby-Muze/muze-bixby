var http = require('http');
var config = require('config');
var console = require('console');

module.exports.function = function movieList (_movieNm, _directorNm, _openStartDt, _openEndDt) {
  
  // var options = {
  //   format: 'json',
  //   query: {
  //     movieNm: "",
  //     directorNm: _directorNm,
  //     openStartDt: "",
  //     openEndDt: ""
  //   }
  // };

  // const fakeData = http.getUrl(config.get("apiBaseUrl")+"movieList", options);
  // console.log(fakeData['movieListResult']['movieList'])
  // // console.log(config.get('baseUrl'))
  // // console.log(fakeData);

  // return fakeData['movieListResult']['movieList']
  return require("../data/MovieListData.js");
}
