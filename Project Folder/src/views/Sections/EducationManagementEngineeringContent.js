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
import { Badge, Button, Container, Row, Col } from "reactstrap";

export default function EducationManagementEngineeringContent() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1 className="title">Managment Engineering Degree</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-chart-bar-32" />
                  </div>
                  <h4 className="info-title">Operations Research</h4>
                  <p className="description">
                    The application of scientific principles to business management, providing a quantitative basis for complex decisions.
.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="tim-icons icon-vector" />
                  </div>
                  <h4 className="info-title">Information Systems</h4>
                  <p className="description">
                    The study of how businesses and organizations design and implement computer applications
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="tim-icons icon-settings-gear-63" />
                  </div>
                  <h4 className="info-title">Management of Technology</h4>
                  <p className="description">
                    Concentration on organizational behaviour and decision-making in all areas of business planning.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
            <Col md="12">
              <Button
                className="btn-simple mt-4"
                color="primary"

                target="_blank"
                href="https://uwaterloo.ca/management-sciences/"
                size="lg"
              >
                Learn More about Mangement Engineering
              </Button>
              </Col>
              </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
