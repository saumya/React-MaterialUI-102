// v 1.0.0
// Renders the list
// it gets the list data as the props from its ControllerView
//
var React = require('react');

var CounterView = React.createClass({
  propTypes:{
    allCounts: React.PropTypes.array.isRequired
  },
  render: function(){
    return(
      <div>
        Counter View
        <ul>
        {
          this.props.allCounts.map(function(item) {
            var sDate = item.getFullYear()+'/'+(item.getMonth()+1)+'/'+item.getDate();
            return <li key={sDate}>{sDate}</li>
          })
        }
        </ul>
      </div>
    );
  }
});
//
module.exports = CounterView;
