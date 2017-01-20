var React = require('react');
var styles = require('../styles')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var BackButton = React.createClass({
  onMouseOver(){
    this
  },
  render(){
    return (
        <Link to={this.props.linkTo}>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <p className="lead" style={styles.backButton}> Back </p>
          </div>
        </Link>
    )
  }
});

module.exports = BackButton;
