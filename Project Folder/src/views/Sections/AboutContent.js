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
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Table
} from "reactstrap";

export default function AboutContent() {
  return (
    <>
    <div className="space-110" />
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="18">
              <div className="section-description">
                <h1 className="title">Noah Bezaire</h1>
                  <h5 className="category text-primary mb-5">
                    <strong> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . .</strong>
                  </h5>
                </div>
              </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
                  <div className="section-description">
                    <p className="description">
                      {`I grew up in Pittsburgh, the City of Champions. We're famous for our three rives, blue-collar steel industry, and putting fries on our sandwiches. Pittsburgh was built upon principles. Strong Work Ethic. Philanthropy. Ideas that I whole-heartedly stand behind. `}
                    </p>
                    <hr>
                    </hr>
                    <p className="description">
                      {`When time came to decide on my undergrad, I moved north to the University of Waterloo for their Co-Op Program and Management Engineering degree. `}
                    </p>
                    <hr>
                    </hr>
                    <p className="description">
                    {`My Co-Op experience taught me that I enjoy working in the fast pace, ever-changing tech world. Most recently I have gravitated towards PM roles. `}
                      </p>
                      <hr>
                      </hr>
                      <p className="description">
                      {`Product Managers live at the center of every decision and solve all sorts of problems. They have the responsibility to advocate for and build the best experiences for their users.`}
                    </p>
                    <hr>
                    </hr>
                    <p className="description">
                    {`When not working, I can most likely be found on a golf course. I enjoy watching hockey and cheering for my TB Lightning, although the Penguins will always be my first love. I'm also an avid reader of everything in the business, leadership and self development genres.`}
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <Card className="card">
                    <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/noah2.jpg")}
                        />
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">About</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-single-02" /> Birthplace:
                            </td>
                            <td className="text-left"> Fribourg, Switzerland
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left">
                            <i className="tim-icons icon-calendar-60" /> Hometown:
                            </td>
                            <td className="text-left"> Pittsburgh, PA
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left">
                            <i className="tim-icons icon-istanbul"/> University:
                            </td>
                            <td className="text-left"> University of Waterloo
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left">
                            <i className="tim-icons icon-pencil"/> Major:
                            </td>
                            <td className="text-left"> Management Engineering
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
        </Row>
      </Container>
      </div>{" "}
    </>
  );
}
