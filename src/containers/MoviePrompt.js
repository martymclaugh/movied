var React = require('react');

var MoviePrompt = React.createClass({
  render(){
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Enter Desired Movie</h1>
        <div className="col-sm-12">
          <form >
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Movie Title"/>
              <input type="text" className="form-control" placeholder="(Optional) Movie Year"/>
            </div>
            <div className="form-group col-sm-four col-sm-offset-4">
              <button className="btn btn-block btn-success" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})
module.exports = MoviePrompt;
