module.exports.function = function movieListTest (movieTitle) {

  // Movie sample data
  const fakeData = require("../data/MovieListData");
  const console = require("console");

  console.log(fakeData);

  return fakeData;
}