var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
// import App from './App';
// import './index.css';

var HelloWorld = React.createClass({
  render(){
    return (
      <div>Hello {this.props.name}</div>
    )
  }
})

ReactDOM.render(
  // <App />,
  routes,
  document.getElementById('app')
);
