var React = require('react');
var helpers = require('../utils/helpers');

var MovieDemographics = React.createClass({
  getInitialState(){
    return {
      ratings: []
    }
  },
  componentWillMount(){
    var imdbID = this.props.routeParams.movieID
    console.log(imdbID)
    helpers.imdbScrape(imdbID).then(function(data){
      this.setState({
        ratings: data
      })
      console.log(this.state)
    }.bind(this))
  },
  render(){
    return (
      <div>{this.state.ratings}</div>
    )
  }
})

module.exports = MovieDemographics;
