/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

export default function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">Noah Bezaire</h1>
                <h5 className="category text-danger mb-5">
                  <strong> . . .</strong>
                </h5>
                <p className="description">
                  {`Paragraph1`}
                </p>
                <hr>
                </hr>
                <p className="description">
                {`Paragraph2`}
                </p>
                <hr>
                </hr>
                <p className="description">
                {`Paragraph3`}
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/presentation-page/content1.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
