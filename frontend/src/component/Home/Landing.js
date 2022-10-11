import React from "react";
import Background from "../../assets/img/slider-pendant-lighting.jpg";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
    <div
        style={{
          backgroundImage: `url(${Background})`
        }}
        className="container1 page-header"
        data-parallax={true}
        ref={pageHeader}
    >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h3>FIND AMAZING PRODUCTS BELOW</h3>
            <br />
            <Button
              href="#products"
              className="btn btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              Scroll
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
