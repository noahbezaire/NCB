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

export default function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">Co-Operative Education</h1>
                <h5 className="category text-primary mb-5">
                  <strong>North America's largest co-op program</strong>
                </h5>
                <p className="description">
                  {`At Waterloo, co-op students alternate study terms with work terms and graduate with up to two years of relevant, paid work experience. This means two years of experience learning how to navigate the hiring process, applying your skills to real-life problems and learning about yourself along the way.`}
                </p>
                <Button
                  className="btn-simple mt-4"
                  color="primary"
                  target="_blank"
                  href="https://uwaterloo.ca/co-operative-education/about-co-op"
                  size="lg"
                >
                  Learn more about Co-Op
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/ceca.jpeg")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
