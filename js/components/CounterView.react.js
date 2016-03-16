// v 1.0.0
// Renders the list
// it gets the list data as the props from its ControllerView
//
var React = require('react');
//
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var ActionGrade = require('material-ui/lib/svg-icons/action/grade');
var ActionInfo = require('material-ui/lib/svg-icons/action/info');
var ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
var Divider = require('material-ui/lib/divider');

var CounterView = React.createClass({
  propTypes:{
    allCounts: React.PropTypes.array.isRequired
  },
  render: function(){
    return(
      <div>
        Counter View
        <List>
        {
          this.props.allCounts.map(function(item) {
            var sDate = item.getFullYear()+'/'+(item.getMonth()+1)+'/'+item.getDate();
            //return <li key={sDate}>{sDate}</li>
            return (<ListItem primaryText={sDate} key={sDate} leftIcon={<ContentInbox />} />)
          })
        }
        </List>
      </div>
    );
  }
});
//
module.exports = CounterView;
