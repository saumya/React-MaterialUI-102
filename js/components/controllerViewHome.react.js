//
var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
//
var HomeControllerView = React.createClass({
  render: function() {
    var onTestButton = function(){
      console.log('onTestButton : Material Button');
    }
    //
    return (
      <div>
        Welcome to your immediate requirement.
        <RaisedButton label="Material Button !" onClick={onTestButton} />
      </div>
    );
  }
});
module.exports = HomeControllerView;
