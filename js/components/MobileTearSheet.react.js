//
import React from 'react';
//
import {cyan500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
//
// Ref : http://www.material-ui.com/v0.15.0-alpha.1/#/customization/themes
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
/*
return (
    <div style={prepareStyles(styles.root)}>
      <div style={prepareStyles(styles.container)}>
        {this.props.children}
      </div>
      <img style={prepareStyles(styles.bottomTear)} src="images/bottom-tear.svg" />
    </div>
  )
*/

const MobileTearSheet = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    height: React.PropTypes.number,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
  },

  getDefaultProps() {
    return {
      height: 500,
    };
  },

  render() {

    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 360,
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        width: 360,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
        <img style={prepareStyles(styles.bottomTear)}/>
      </div>
    );
  },

});

export default MobileTearSheet;
