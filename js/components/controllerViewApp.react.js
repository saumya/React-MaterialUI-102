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
  styles: {
    title: {
      cursor: 'pointer',
    },
  },
  render: function(){
    var that = this;
    var onTitleTouchTapHandler = function(){
      alert('onTitleTouchTapHandler');
    }
    //
    return (
      <nav>
          <AppBar
            title={<span style={that.styles.title}>My App Bar</span>}
            onTitleTouchTap={onTitleTouchTapHandler}
            iconElementRight={<FlatButton label="Done" onTouchTap={that.onDone} />} />
        {
          //renders the children
          this.props.children
        }
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
  },
  onHandleClick: function() {
    console.log('onHandleClick');
  }
});
module.exports = AppControllerView;
