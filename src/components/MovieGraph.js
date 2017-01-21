var React = require('react');

var MovieGraph = React.createClass({
  render(){
    return(
      <div>
        {console.log(this.props.data)}
      </div>
    )
  }
})

module.exports = MovieGraph;
