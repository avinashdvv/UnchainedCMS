/* @flow weak */

/*
 * Component: Logo
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, { Component } from "react";
import { Image, Grid, Heading } from "unchained-ui-react";
import { NavLink } from "react-router-dom";
import { pushToDataLayer } from "analytics";
import st from "constants/strings";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import "./Logo.scss";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class Logo extends Component {
  props: {
    logo: "",
    altText: "",
    logoText: ""
  };

  static defaultProps = {
    logoText: "Equity Research"
  };

  state = {
    // Initialize state here
  };

  componentDidMount() {
    // Component ready
  }
  render() {
    const { altText, image: logo, logoText } = this.props.data[0].value;
    return (
      <Grid.Column className="bmo-logo" mobile={12} tablet={12} computer={3}>
        <div className="logo">
          <NavLink
            to={"/"}
            onClick={() => pushToDataLayer("common", "bmoLogoClick")}
          >
            <Image
              alt={altText}
              src={logo}
              title={st.bmoLogo}
              className="bmo-header-logo"
            />
            <Heading content={logoText} className={"logo-text"} />
          </NavLink>
        </div>
      </Grid.Column>
    );
  }
}

export default Logo;
