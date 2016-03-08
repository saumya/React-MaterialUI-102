//
var React = require('react');
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
//
var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardHeader = require('material-ui/lib/card/card-header');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');
var FlatButton = require('material-ui/lib/flat-button');


var AddNew = React.createClass({
  onSeeAll: function(){
    console.log('onSeeAll');
    this.context.router.push('/see');
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    var that = this;
    // specifically written here, just to confirm this way of writting the handler
    var onHome = function(){
      that.context.router.push('/');
    }
    //
    return (
      <Card>
        <CardTitle title="Add" subtitle="Add new items." />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Home" onClick={onHome} />
          <FlatButton label="See All" onClick={that.onSeeAll} />
          <Link to='/see' className="button button-red"> See All Link </Link>
          <button className="btn" onClick={that.onSeeAll}>See All Button</button>
        </CardActions>
      </Card>
    );
  }
});
module.exports = AddNew;
