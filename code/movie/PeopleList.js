var http = require('http');
var config = require('config');
var console = require('console');
var tool = require('lib/tool.js');

module.exports.function = function peopleList (_peopleNm, _filmoNames) {

  // 파라미터가 넘어오지 않을 경우 undefined로 적용되게 때문에 undefined일 경우 빈공간으로 변환
  if(_peopleNm == undefined) _peopleNm = "";
  if(_filmoNames == undefined) _filmoNames = "";

  var options = {
    format: 'json',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvb2V1bnoiLCJVU0VSTkFNRSI6Im9vZXVueiIsIkVNQUlMIjoieXVuczk5NEBnbWFpbC5jb20iLCJVU0VSX1JPTEUiOiJST0xFX1VTRVIifQ.Ibvyggk8HMcgY-hiChQNb5TzOGcKH8KKAJAgx-Fto7s'
    },
    query: {
      // 모든 쿼리 required
      curPage: "1",
      peopleNm: _peopleNm,
      filmoNames: _filmoNames,
    }
  };

  var resData = http.getUrl(config.get("apiBaseUrl")+"actorList", options);
  let resultData = resData.data.peopleListResult.peopleListResult.peopleList;

  console.log(resultData);

  return resultData;
}
