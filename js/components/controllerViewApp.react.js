//
var React = require('react');
// react-router
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;

// react material-ui
var AppBar = require('material-ui/lib/app-bar') ;
var RaisedButton = require('material-ui/lib/raised-button') ;
var FlatButton = require('material-ui/lib/flat-button');

var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  render: function(){
    var that = this;
    //
    var onHomeClick = function(e){
      console.log('onHome');
      that.context.router.push('/');
      return false;
    }
    var onAddNewClick = function(){
      console.log('onAddNewClick');
      that.context.router.push('/add');
    }
    var onSeeAllClick = function(){
      console.log('onSeeAllClick');
      that.context.router.push('/see');
    }
    //
    return (
      <div className="row">
        <AppBar title="My AppBar"
          iconElementRight={<FlatButton label="Done" onClick={that.onDone} />}
          onTitleTouchTap={that.onTitleTouchTapHandle} />

        <nav className="u-full-width">
          <h2>React React-Router MaterialUI , Lets play.</h2>
          <ul id="navlist">
            <li><Link to='/see' className="button button-red"> See All </Link></li>
            <li><Link to='/add' className="button button-red"> Add New </Link></li>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li>Empty on purpose</li>
            <li>{<FlatButton label="Home" onClick={onHomeClick} />}</li>
            <li>{<RaisedButton label="Add New" primary={true} onClick={onAddNewClick} />}</li>
            <li>{<FlatButton label="See All" onClick={onSeeAllClick} />}</li>
            <li>Empty on purpose</li>
          </ul>
          <RaisedButton label="Home" primary={false} onClick={onHomeClick} />
        </nav>
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  },
  onTitleTouchTapHandle: function(){
    debugger;
    // Not working ! Need to see why ?
    console.log('onTitleTouchTapHandle');
  },
  onDone: function(){
    console.log('onDone');
  },
  onHandleClick: function() {
    console.log('onHandleClick');
  }
});
module.exports = AppControllerView;
