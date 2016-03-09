//
var React = require('react');
//
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var ActionGrade = require('material-ui/lib/svg-icons/action/grade');
var ActionInfo = require('material-ui/lib/svg-icons/action/info');
var ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
var ContentDrafts = require('material-ui/lib/svg-icons/content/drafts');
var ContentSend = require('material-ui/lib/svg-icons/content/send');
var Divider = require('material-ui/lib/divider');

/*
// For Themed UI :
//var SelectableContainerEnhance = require('material-ui/lib/hoc/selectable-enhance');
var MobileTearSheet = require('./MobileTearSheet.react');
var cyan500 = require('material-ui/lib/styles/colors');
var MuiThemeProvider = require('material-ui/lib/MuiThemeProvider');
var getMuiTheme = require('material-ui/lib/styles/getMuiTheme');
//
render: function(){
  var muiTheme = getMuiTheme({ palette: { textColor: cyan500, }, appBar: { height: 50, }, });
  return(
    <MuiThemeProvider muiTheme={muiTheme}>
      <MobileTearSheet>
        <list>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </list>
      </MobileTearSheet>
    </MuiThemeProvider>
  )
}
*/

//
var SeeAllControllerView = React.createClass({
  render: function(){
    //
    return (
        <div>
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
        <Divider />
          <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
          </List>
        </div>
    );
  }
});
module.exports = SeeAllControllerView;
