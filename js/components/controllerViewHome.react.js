//
var React = require('react');
//
var RaisedButton = require('material-ui/lib/raised-button');
var FlatButton = require('material-ui/lib/flat-button');
var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardHeader = require('material-ui/lib/card/card-header');
var CardText = require('material-ui/lib/card/card-text');
//
var HomeControllerView = React.createClass({
  render: function() {
    var onTouchTap = function(){
      console.log('onTouchTap : Material Button');
    }
    //
    return (
      <Card>
        <CardHeader
          title="Green Beauty"
          subtitle="Nature is at its best"
          actAsExpander={true}
          showExpandableButton={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          <div>
            Welcome to your immediate requirement.
            <RaisedButton label="Material Button !" onTouchTap={onTouchTap}  />
          </div>
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
});
module.exports = HomeControllerView;
