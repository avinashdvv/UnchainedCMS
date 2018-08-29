/* @flow weak */

/*
 * Component: Header
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {
  Component
} from 'react';
import {
  Container
} from 'unchained-ui-react';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './Header.scss';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class Header extends Component {
  props: {
    children: {},
  };

  state = {};

  componentDidMount() {
    // Component ready
  }

  render() {
    const {
      children,
    } = this.props;

    return ( <
      Container className = "header-container"
      id = {
        'mainPageHeader'
      } > {
        children
      } <
      /Container>
    );
  }
}

export default Header;