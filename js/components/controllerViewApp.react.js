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
      alert('onTitleTouchTapHandler');
    }
    var onLeftIconTouchTapHandler = function(){
      alert('onLeftIconTouchTapHandler');
    }
    //
    return (
      <nav>
          <AppBar
            title={<span style={that.styles.title}>My App Bar</span>}
            onTitleTouchTap={onTitleTouchTapHandler}
            onLeftIconButtonTouchTap={onLeftIconTouchTapHandler}
            iconElementRight={<FlatButton label="Menu" onClick={that.onDone} />} />
            <LeftNav open={this.state.open}>
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
  onDone: function(){
    console.log('onDone');
    this.setState({open: !this.state.open});
  },
  onHandleClick: function() {
    console.log('onHandleClick');
  }
});
module.exports = AppControllerView;
