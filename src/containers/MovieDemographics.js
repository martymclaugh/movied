var React = require('react');
var helpers = require('../utils/helpers');
var axios = require('axios');

var MovieDemographics = React.createClass({
  getInitialState(){
    return {
      ratings: undefined,
      loading: true
    }
  },
  componentWillMount(){
    var imdbID = this.props.routeParams.movieID
    console.log(imdbID)
    var url = 'https://informationextractor.herokuapp.com/scrape/' + imdbID
    console.log(url)
    axios.get(url).then(function(response){
      console.log(response);
      this.setState({
        ratings: response.data.ratings,
        loading: false
      })
      console.log(this.state, 'CURRENT STATE')
    }.bind(this))
  },
  render(){
    if (!this.state.loading){
      return (
        <div>
        <p>DONE LOADING</p>
        <p>{JSON.stringify(this.state.ratings)}</p>
        {this.state.ratings.map((rating) => {
          return(
            <div>
          <h1>Who: {rating.who}</h1>
          <h2>How Many: {rating.amount}</h2>
          <h2>Average Rating: {rating.rating}</h2>
          </div>
        )
        })
      }
      </div>
      )
    } else {
      return(
        <h1>STILL LOADING</h1>
      )
    }
  }
})

module.exports = MovieDemographics;
