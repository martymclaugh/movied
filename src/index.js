var React = require('react');
var ReactDOM = require('react-dom');
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
  <HelloWorld name="SHAZAM"/>,
  document.getElementById('app')
);
