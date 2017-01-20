var axios = require('axios');
var cheerio = require('cheerio');

function parseRatingsResponse(data){
  data = data.split('See user ratings report for:')[1].split('Related Links')[0];
  var newData = [];
  data.split('\n').forEach(function(line){
    newData.push(line.replace(/\s+/g,' ').trim());
  })
  newData = newData.filter(function(n){ return n !== '' && n !== 'Votes' && n !== 'Average'});
  output = [];
  newData.forEach(function(line){
    let rating, amount;
    var arr = line.split(' ');
    var len = arr.length;
    rating = arr.pop();
    amount = arr.pop();
    who = arr.join(' ');
    output.push({who, rating, amount});
  });
  console.log(output);
  return output;
}

var helpers = {
  omdbIdPing: function(id){
    var url = "http://www.omdbapi.com/?i=" + id + "&plot=full&r=json"
    return axios.get(url).then(response => {
      return(response.data)
    })
  },
  omdbTitlePing: function (movieTitle, movieYear){
    if(movieYear.length > 0){
      return axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y="+ movieYear + "&plot=full&r=json").then(response => {
        return(response.data)
      })
    } else {
      return axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=full&r=json").then(response => {
        return(response.data)
      })
    }
  },
  imdbScrape: function(id){
    var config = {
      headers: {"Access-Control-Allow-Origin": "*"}
    }
    url = 'http://www.imdb.com/title/' + id + '/ratings';
    console.log(url)
    axios.get(url).then(function(response){
      if(response.status >= 200 && response.status < 300){
        var $ = cheerio.load(response.data);
        var title, release, rating;
        var json = {};
        var ratings = $('#tn15content').text();
        var title = $('.main').text();
      }
      json.title = title;
      json.ratings = parseRatingsResponse(ratings);
      return json;
  })
  }
}

module.exports = helpers;
