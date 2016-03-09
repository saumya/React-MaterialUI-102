//
var React = require('react');
// react-router
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;
// react material-ui
var AppBar = require('material-ui/lib/app-bar') ;
var RaisedButton = require('material-ui/lib/raised-button') ;
var FlatButton = require('material-ui/lib/flat-button');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');
var FloatingActionButton = require('material-ui/lib/floating-action-button');
var ContentAdd = require ('material-ui/lib/svg-icons/content/add');

var AppControllerView = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  styles: {
    title: {
      cursor: 'pointer',
    },
  },
  getInitialState: function() {
    return {open: false};
  },
  render: function(){
    var that = this;
    var onTitleTouchTapHandler = function(){
      console.log('onTitleTouchTapHandler : Title :');
    }
    var onLeftIconTouchTapHandler = function(){
      console.log('onLeftIconTouchTapHandler : local');
      that.onMenuTouchTap();
    }
    var style = {
      position: 'absolute',
      bottom:20,
      right:20,
    };
    //
    return (
      <nav>
          <AppBar
            title={<span style={that.styles.title}>My App Bar</span>}
            onTitleTouchTap={onTitleTouchTapHandler}
            onLeftIconButtonTouchTap={onLeftIconTouchTapHandler}
            iconElementRight={<FlatButton label="Done" onTouchTap={that.onDone} />} />
          <LeftNav docked={false} width={300} swipeAreaWidth={100} open={this.state.open} onRequestChange={that.onRequestChange} >
              <MenuItem>Profile</MenuItem>
              <MenuItem onTouchTap={that.onMenuViewAll}>View All Items</MenuItem>
              <MenuItem>Logout</MenuItem>
          </LeftNav>

          { /* renders the children */ this.props.children }

          <FloatingActionButton mini={false} secondary={false} style={style}>
            <ContentAdd />
          </FloatingActionButton>
      </nav>
    );
  },
  onTitleTouchTap: function(){
    console.log('onTitleTouchTapHandle');
  },
  onMenuTouchTap: function(){
    console.log('onMenuTouchTap : Menu');
    this.setState({open: !this.state.open});
  },
  onRequestChange: function(){
    console.log('onRequestChange :');
    this.setState({open: !this.state.open});
  },
  onDone: function(){
    console.log('onDone');
  },
  onMenuViewAll: function() {
    console.log('onMenuViewAll');
    this.context.router.push('/see');
  }
});
module.exports = AppControllerView;
