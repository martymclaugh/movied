var React = require('react');
var transparentBg = require('../styles').transparentBg;
var helpers = require('../utils/helpers');

var MoviePrompt = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      movieTitle: '',
      movieYear: ''
    }
  },
  onUpdateMovieTitle(e){
    this.setState({
      movieTitle: e.target.value
    })
  },
  onUpdateMovieYear(e){
    this.setState({
      movieYear: e.target.value
    })
  },
  onSubmitMovie(e){
    e.preventDefault();
    var movieTitle = this.state.movieTitle.split(' ').join('+');
    var movieYear = this.state.movieYear;
    this.setState({
      movieYear: '',
      movieTitle: '',
      movieData: []
    })
    // make api call
    helpers.omdbTitlePing(movieTitle, movieYear).then(function(data){
      this.setState({
        movieData: data
      })
      // go to movie preview
      this.context.router.push('/movie/' + this.state.movieData.imdbID)
      console.log(this.state.movieData, 'info')
    }.bind(this))
  },
  render(){
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>Enter Desired Movie</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitMovie}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Movie Title"
                value={this.state.movieTitle}
                onChange={this.onUpdateMovieTitle}/>
              <input
                type="text"
                className="form-control"
                placeholder="(Optional) Movie Year"
                value={this.state.movieYear}
                onChange={this.onUpdateMovieYear}/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
module.exports = MoviePrompt;
