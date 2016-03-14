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
var DatePicker = require ('material-ui/lib/date-picker/date-picker');
var Dialog = require ('material-ui/lib/dialog');

var Calendar = require ('material-ui/lib/date-picker/calendar');
var DateTime = require ('material-ui/lib/utils/date-time');

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
    return (
      {
        leftMenu:{open:false},
        dialogPopup:{open:false},
      }
    );
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
    var actions = [
      <FlatButton label="Cancel" secondary={true} onTouchTap={this.onDialogueCancel} />,
      <FlatButton label="Ok" primary={true} disabled={false} onTouchTap={this.onDialogueOk} />,
    ];
    //
    return (
      <nav>
          <AppBar
            title={<span style={that.styles.title}>My App Bar</span>}
            onTitleTouchTap={onTitleTouchTapHandler}
            onLeftIconButtonTouchTap={onLeftIconTouchTapHandler}
            iconElementRight={<FlatButton label="Done" onTouchTap={that.onDone} />} />
          <LeftNav docked={false} width={300} swipeAreaWidth={100} open={this.state.leftMenu.open} onRequestChange={that.onRequestChange} >
              <MenuItem>Profile</MenuItem>
              <MenuItem onTouchTap={that.onMenuViewAll}>View All Items</MenuItem>
              <MenuItem>Logout</MenuItem>
          </LeftNav>

          { /* renders the children */ this.props.children }

          <FloatingActionButton mini={false} secondary={false} style={style} onTouchTap={that.onAddHandler}>
            <ContentAdd />
          </FloatingActionButton>
          <Dialog title="Add to Count" actions={actions} modal={true} open={this.state.dialogPopup.open}>
            Which date you want to add to the count ?
            <Calendar
              DateTimeFormat={DateTime.DateTimeFormat}
              firstDayOfWeek={0}
              locale="en-US"
              ref="calendar"
              onDayTouchTap={this.handleTouchTapDay}
              initialDate={this.props.initialDate}
              open={this.state.open}
              minDate={this.props.minDate}
              maxDate={this.props.maxDate}
              shouldDisableDate={this.props.shouldDisableDate}
              disableYearSelection={this.props.disableYearSelection}
              mode={this.props.mode}
            />
          </Dialog>
          <DatePicker hintText="Portrait Dialog" mode="portrait" disabled={false} />
      </nav>
    );
  },
  handleTouchTapDay: function(evtObj,dateObj){
    console.log('onTouchTapDay:evtObj:',evtObj);
    console.log('onTouchTapDay:dateObj:',dateObj);
    //TODO: add the new date inside counter
  },
  onTitleTouchTap: function(){
    console.log('onTitleTouchTapHandle');
  },
  onMenuTouchTap: function(){
    console.log('onMenuTouchTap : Menu');
    this.setState({leftMenu:{open: !this.state.leftMenu.open}});
  },
  onRequestChange: function(){
    console.log('onRequestChange :');
    this.setState({leftMenu:{open: !this.state.leftMenu.open}});
  },
  onDone: function(){
    console.log('onDone');
  },
  onAddHandler: function(){
    console.log('onAddHandler');
    this.setState({dialogPopup:{open: !this.state.dialogPopup.open}});
  },
  onDialogueCancel: function(){
    console.log('onDialogueCancel');
    this.setState({dialogPopup:{open: !this.state.dialogPopup.open}});
  },
  onDialogueOk: function(){
    console.log('onDialogueOk');
    this.setState({dialogPopup:{open: !this.state.dialogPopup.open}});
  },
  onMenuViewAll: function() {
    console.log('onMenuViewAll');
    this.context.router.push('/see');
  }
});
module.exports = AppControllerView;
