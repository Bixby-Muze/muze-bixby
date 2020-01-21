var console = require('console');
var tool = require('lib/tool.js');

module.exports.function = function dailyBoxOffice () {

  var resData = require("../data/DailyBoxOfficeData.js");  

  let resultData = resData.boxOfficeResult.dailyBoxOfficeList;

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
