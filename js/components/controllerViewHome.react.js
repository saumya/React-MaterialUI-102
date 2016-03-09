//
var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
//
var HomeControllerView = React.createClass({
  render: function() {
    var onTouchTap = function(){
      console.log('onTouchTap : Material Button');
    }
    //
    return (
      <div>
        Welcome to your immediate requirement.
        <RaisedButton label="Material Button !" onTouchTap={onTouchTap}  />
      </div>
    );
  }
});
module.exports = HomeControllerView;
