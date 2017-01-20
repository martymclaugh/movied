var React = require('react');
var transparentBg = require('../styles').transparentBg
var helpers = require('../utils/helpers.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var BackButton = require('../components/BackButton');

var MoviePrompt = React.createClass({
  getInitialState(){
    return {
      movieData: []
    }
  },
  componentWillMount(){
    var imdbID = this.props.routeParams.movieID
    console.log(imdbID, 'id')
    helpers.omdbIdPing(imdbID).then(function(data){
      this.setState({
        movieData: data
      })
      console.log(this.state)
    }.bind(this))
  },
  render(){
    return (
      <div>
        <BackButton linkTo="/search"/>
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.state.movieData['Title']}</h1>
        <h2>{this.state.movieData['Year']}</h2>
        <img src={this.state.movieData['Poster']} alt={this.state.movieData['Title']}/>
        <p className="lead">{this.state.movieData['Plot']}</p>
        <Link to={"/movie/" + this.state.movieData['imdbID'] + "/ratings"}>
          <button type="submit" className="btn btn-primary btn-lg">
          View Demographics
          </button>
        </Link>
        </div>
      </div>
    )
  }
})
module.exports = MoviePrompt;
