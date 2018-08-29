/* @flow weak */

/*
 * Component: LollypopCarousel
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, { Component } from "react";
import Slick from "react-slick";
import { Container, Segment } from "unchained-ui-react";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import "./LollypopCarousel.scss";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class LollypopCarousel extends Component {
  props: {
    children: "",
    carouselType: ""
  };

  static defaultProps = {};

  state = {
    // Initialize state here
  };

  componentDidMount() {
    // Component ready
  }

  render() {
    const { children } = this.props;
    const settings = {
      dots: children.length > 1,
      speed: 1000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      accessibility: true,
      centerMode: true,
      centerPadding: "0px 0px",
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: children.length > 1,
            swipeToSlide: true,
            centerMode: true,
            centerPadding: "0px 0px",
            slidesToShow: 1,
            infinite: false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="lollypop-carousel">
        <div className={"carousel-component"}>
          <Segment className={"carousel-segment-homepage"}>
            <Container className={`${this.props.carouselType}`}>
              <Slick {...settings}>
                {children.map(child => (
                  <div>{child}</div>
                ))}
              </Slick>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}

export default LollypopCarousel;
