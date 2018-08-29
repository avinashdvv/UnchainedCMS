/* @flow weak */

/*
 * Component: TopHeaderMenuItem
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { pushToDataLayer } from "analytics";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import "./TopHeaderMenuItem.scss";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class TopHeaderMenuItem extends Component {
  props: {
    text: "",
    to: ""
  };

  static defaultProps = {};

  state = {
    // Initialize state here
  };

  componentDidMount() {
    // Component ready
  }

  handleNavClick = label => {
    pushToDataLayer("common", "topMenuNav", { label });
  };

  render() {
    const { text, to } = this.props.data[0].value;
    if (to.url) {
      if (to.link_target !== "newTab") {
        return (
          <NavLink
            className="header-menu-cell"
            onClick={() => this.handleNavClick(text)}
            to={to.url}
          >
            {text}
          </NavLink>
        );
      }
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="header-menu-cell"
          onClick={() => this.handleNavClick(text)}
          href={to.url}
        >
          {text}
        </a>
      );
    }
    return null;
  }
}

export default TopHeaderMenuItem;
