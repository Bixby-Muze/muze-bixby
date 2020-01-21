var http = require('http');
var config = require('config');
var console = require('console');
var tool = require('lib/tool.js');

module.exports.function = function dailyBoxOffice () {

  var options = {
    format: 'json',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvb2V1bnoiLCJVU0VSTkFNRSI6Im9vZXVueiIsIkVNQUlMIjoieXVuczk5NEBnbWFpbC5jb20iLCJVU0VSX1JPTEUiOiJST0xFX1VTRVIifQ.Ibvyggk8HMcgY-hiChQNb5TzOGcKH8KKAJAgx-Fto7s'
    },
    query: {
      openStartDt: '1985',
      openEndDt: '2010',
      directorNm: '',
      movieNm: '죽은',
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
