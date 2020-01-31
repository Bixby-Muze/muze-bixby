var http = require('http');
var config = require('config');
var console = require('console');
var tool = require('lib/tool.js');

module.exports.function = function movieList (_movieNm, _directorNm, _openStartDt, _openEndDt) {

  // 파라미터가 넘어오지 않을 경우 undefined로 적용되게 때문에 undefined일 경우 빈공간으로 변환
  if(_movieNm == undefined) _movieNm = "";
  if(_directorNm == undefined) _directorNm = "";
  if(_openStartDt == undefined) _openStartDt = "";
  if(_openEndDt == undefined) _openEndDt = "";

  var options = {
    format: 'json',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvb2V1bnoiLCJVU0VSTkFNRSI6Im9vZXVueiIsIkVNQUlMIjoieXVuczk5NEBnbWFpbC5jb20iLCJVU0VSX1JPTEUiOiJST0xFX1VTRVIifQ.Ibvyggk8HMcgY-hiChQNb5TzOGcKH8KKAJAgx-Fto7s'
    },
    query: {
      // 모든 쿼리 required
      openStartDt: _openStartDt,
      openEndDt: _openEndDt,
      directorNm: _directorNm,
      movieNm: _movieNm,
    }
  };

  var resData = http.getUrl(config.get("apiBaseUrl")+"movieList", options);

  let resultData = resData.data.movieListResult.movieList;

  for(let i = 0; i < resultData.length; i++){
    let movieCd = resultData[i].movieCd
    let movieDetail = tool.GetMovieDetail(movieCd);

    resultData[i].showTm = movieDetail.movieInfoResult.movieInfo.showTm;
    resultData[i].nations = movieDetail.movieInfoResult.movieInfo.nations;
    resultData[i].genres = movieDetail.movieInfoResult.movieInfo.genres;
    resultData[i].directors = movieDetail.movieInfoResult.movieInfo.directors;
    resultData[i].actors = movieDetail.movieInfoResult.movieInfo.actors;
    resultData[i].showTypes = movieDetail.movieInfoResult.movieInfo.showTypes;
    resultData[i].audits = movieDetail.movieInfoResult.movieInfo.audits;
  }

  console.log(resultData)

  return resultData;
}
