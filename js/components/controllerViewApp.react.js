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
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');

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
      //alert('onTitleTouchTapHandler');
      console.log('onTitleTouchTapHandler : Title :');
    }
    var onLeftIconTouchTapHandler = function(){
      //alert('onLeftIconTouchTapHandler');
      //this.setState({open: !this.state.open});
      console.log('onLeftIconTouchTapHandler : local');
      that.onMenuTouchTap();
    }
    //
    return (
      <nav>
          <AppBar
            title={<span style={that.styles.title}>My App Bar</span>}
            onTitleTouchTap={onTitleTouchTapHandler}
            onLeftIconButtonTouchTap={onLeftIconTouchTapHandler}
            iconElementRight={<FlatButton label="Done" onTouchTap={that.onDone} />} />
          <LeftNav docked={false} width={200} open={this.state.open} onRequestChange={that.onRequestChange} >
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
          </LeftNav>
          { /* renders the children */ this.props.children }
      </nav>
    );
  },
  onTitleTouchTap: function(){
    //debugger;
    // Not working ! Need to see why ?
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
    //this.setState({open: !this.state.open});
  },
  onHandleClick: function() {
    console.log('onHandleClick');
  }
});
module.exports = AppControllerView;
