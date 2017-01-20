var React = require('react');
var transparentBg = require('../styles').transparentBg

var MoviePrompt = React.createClass({
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
    console.log(this.state);
  },
  onUpdateMovieYear(e){
    this.setState({
      movieYear: e.target.value
    })
    console.log(this.state)
  },
  render(){
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1></h1>
        <div className="col-sm-12">
          <form >
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
