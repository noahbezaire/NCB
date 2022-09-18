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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";

// core components


export default function ExperienceFullTime() {
  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Full-Time Experience</h2>
                <h4 className="description">
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="10">
                <Card className="card-profile card-horizontal">
                  <Row>
                    <Col xl="7">
                      <div className="card-image no-mask">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/even.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col xl="5">
                      <CardBody className="mt-3">
                        <h6 className="card-category">Company</h6>
                        <CardTitle tag="h4">EVEN Financial</CardTitle>
                        <br />
                        <h6 className="card-category">Position</h6>
                        <CardTitle tag="h4">Associate Product Manager</CardTitle>
                        <br />
                        <Row>
                          <Col lg="12">
                            <h6 className="card-category">HQ</h6>
                            <CardTitle tag="h4">New York City</CardTitle>
                          </Col>
                        </Row>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
