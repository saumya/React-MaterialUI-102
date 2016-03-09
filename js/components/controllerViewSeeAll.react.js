//
var React = require('react');
//
//var MobileTearSheet = require('../../../MobileTearSheet');
var SelectableContainerEnhance = require('material-ui/lib/hoc/selectable-enhance');

var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var ActionGrade = require('material-ui/lib/svg-icons/action/grade');
var ActionInfo = require('material-ui/lib/svg-icons/action/info');
var ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
var ContentDrafts = require('material-ui/lib/svg-icons/content/drafts');
var ContentSend = require('material-ui/lib/svg-icons/content/send');
var Divider = require('material-ui/lib/divider');
//
//var MobileTearSheet = require('./components/MobileTearSheet.react');
import MobileTearSheet from './MobileTearSheet.react';
//var TestComponent = require('./TestComp.react');

var SeeAllControllerView = React.createClass({
  render: function(){
    return (
      <MobileTearSheet>
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
      </MobileTearSheet>
    );
  }
});
module.exports = SeeAllControllerView;
