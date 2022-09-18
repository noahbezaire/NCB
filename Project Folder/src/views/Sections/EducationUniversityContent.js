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

// reactstrap components
import { Container,Button, Row, Col } from "reactstrap";

export default function EducationUniversityContent() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col lg="4">
              <Col lg="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="img rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/qnc.jpg")}
                />
                <img
                  alt="..."
                  className="img img-comments rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/waterloosign.jpg")}
                />
              </div>
              </Col>
            </Col>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">University of Waterloo</h1>
                <h5 className="category text-primary mb-5">
                  <strong>Ontario, Canada</strong>
                </h5>
                <p className="description">
                  {`Founded in 1957, the University of Waterloo has more than 42,000+ students attending annually. With a global network spanning more than 220,000 alumni in 151 countries, Waterloo is providing work-integrated learning opportunities with 7,100+ active co-op employers and fosters an entrepreneurial spirit. `}
                </p>
                <Button
                  className="btn-simple mt-4"
                  color="primary"
                  target="_blank"
                  href="https://uwaterloo.ca/"
                  size="lg"
                >
                  Learn more about UWaterloo
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
