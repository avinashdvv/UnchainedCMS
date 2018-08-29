/* @flow weak */

/*
 * Component: FooterLinkColumn
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, { Component } from "react";
import { Grid, Heading } from "unchained-ui-react";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import "./FooterLinkColumn.scss";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class FooterLinkColumn extends Component {
  props: {
    sectionTitle: "",
    children: {}
  };

  static defaultProps = {};

  state = {
    isExpanded: false
  };
  expand = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({ isExpanded });
  };
  componentDidMount() {
    // Component ready
  }

  render() {
    const { children } = this.props;
    const { sectionTitle } = this.props.data[0];
    const showLink = true;
    return showLink ? (
      <Grid.Column
        className={"footer-link-column"}
        computer={3}
        mobile={12}
        tablet={3}
      >
        <Heading content={sectionTitle} className="footer-link-section-title" />
        <div
          className={`footer-link-section-title-mobile ${this.state.isExpanded.toString()}`}
        >
          <Heading className="links-title" onClick={this.expand}>
            {sectionTitle}
            <i aria-hidden="true" className="bmo_chevron bottom" />{" "}
          </Heading>
        </div>
        <div className={`links-set ${this.state.isExpanded.toString()}`}>
          {children}
        </div>
      </Grid.Column>
    ) : null;
  }
}

export default FooterLinkColumn;
