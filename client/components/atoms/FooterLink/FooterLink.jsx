/* @flow weak */

/*
 * Component: FooterLink
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { pushToDataLayer } from "analytics";
import { Container, Button, Heading } from "unchained-ui-react";
import { BmoPopUp } from "components";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import "./FooterLink.scss";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class FooterLink extends Component {
  props: {
    to: "",
    text: "",
    forLoggedInUserField: boolean,
    forRDSUserField: boolean
  };

  static defaultProps = {
    // ...
  };

  state = {
    forceHide: false
  };

  handleNavClick = label => {
    pushToDataLayer("common", "footerLinks", { label });
  };
  handleCloseDiv = () => {
    this.setState({ forceHide: true });
  };
  clickFunction = () => {
    this.setState({ forceHide: false });
  };
  render() {
    const {
      to,
      text,
      forLoggedInUserField,
      forRDSUserField
    } = this.props.data[0].value;
    if (to.url) {
      if (forLoggedInUserField || forRDSUserField) {
        return (
          <div className="footer-links-set">
            <a className="footer-link">
              {text}
              <BmoPopUp
                showOnClick={true}
                clickFunction={this.clickFunction}
                forceHide={this.state.forceHide}
                minHeight={120}
                minWidth={200}
                hideOnScroll={false}
                hideController="click"
              >
                <div className="auth-modal-not-logged">
                  <Button
                    tabIndex={0}
                    className="not-logged-modal-close-footer bmo-close-btn bg-icon-props"
                    onClick={this.handleCloseDiv}
                    aria-label="Close Modal"
                  />
                  <Container className="form-container">
                    <Container className="not-logged-div">
                      <Heading as={"h1"}>
                        This feature accessible to logged in or registered
                        clients only.
                      </Heading>
                    </Container>
                  </Container>
                </div>
              </BmoPopUp>
            </a>
          </div>
        );
      } else if (to.link_target !== "newTab") {
        return (
          <div className="footer-links-set">
            <NavLink
              to={to.url}
              onClick={() => this.handleNavClick(text)}
              className="footer-link"
            >
              {text}
            </NavLink>
          </div>
        );
      }
      return (
        <div className="footer-links-set">
          <a
            href={to.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.handleNavClick(text)}
            className="footer-link"
          >
            {text}
          </a>
        </div>
      );
    }
    return null;
  }
}

export default FooterLink;
