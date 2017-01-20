var axios = require('axios');

function omdbData(response){

}

var helpers = {
  omdbIdPing: function(id){
    var url = "http://www.omdbapi.com/?i=" + id + "&plot=full&r=json"
    console.log(url)
    return axios.get(url).then(response => {
      console.log(response.data)
      return(response.data)
    })
  },
  omdbTitlePing: function (movieTitle, movieYear){
    console.log(movieTitle);
    console.log(movieYear);
    if(movieYear.length > 0){
      return axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y="+ movieYear + "&plot=full&r=json").then(response => {
        console.log(response.data)
        return(response.data)
      })
    } else {
      return axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=full&r=json").then(response => {
        console.log(response.data)
        return(response.data)
      })
    }
  }
}

module.exports = helpers;
