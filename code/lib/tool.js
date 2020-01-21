var http = require('http');
module.exports.GetMovieDetail = function(movieCd){
  let options = {
    query: {
      key: "08dcd1b5b0105efc838fc917d5478ed4",
      movieCd : movieCd,
    },
    format : "json"
  }
  
  let result = http.getUrl("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json", options);
  return result
}