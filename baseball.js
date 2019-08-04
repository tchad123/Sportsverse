$.ajax
({
  type: "GET",
  url: "https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/date/20190803/games.json",
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa("a348db99-94e1-4eee-8178-62e54c" + ":" + "MYSPORTSFEEDS")
  },
success: function (json){


  for (let i = 0; i <json.games.length; i++){
  $(".insert-data").append(`<div class="container"><p>${json.games[i].schedule.awayTeam.abbreviation} : ${json.games[i].score.awayScoreTotal}</p><p>${json.games[i].schedule.homeTeam.abbreviation} : ${json.games[i].score.homeScoreTotal}</p></div>`)
}
 }
 
});





