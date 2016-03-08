//
var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
//
var HomeControllerView = React.createClass({
  render: function() {
    return (
      <div>
        Welcome to your immediate requirement.
        <RaisedButton label="Material Button !" />
      </div>
    );
  }
});
module.exports = HomeControllerView;
