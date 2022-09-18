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
export default function ExperienceCoop() {
  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Co-Op Experience</h2>
                <h4 className="description">
                Co-Operative Education was the #1 reason I choose to attend Waterloo and I was fortunate to have a variety of experiences.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                    <h4 className="title">Coop 1</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/coop-logo-orbital.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Orbital Eng</h3>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-single-02" /> Business Development
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td className="text-left">
                          <i className="tim-icons icon-calendar-60" /> May 2015 - Sept 2015
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">
                          <i className="tim-icons icon-compass-05"/>Pittsburgh, PA
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                  <h4 className="title">Coop 2</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/logo-kik.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Kik Interactive</h3>
                    <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="tim-icons icon-single-02" /> QA & Release Engineer
                        </td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-calendar-60" /> Jan 2016 - May 2016
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-compass-05" /> Waterloo, ON
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                  <h4 className="title">Coop 3</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/logo-avidbots.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Avidbots</h3>
                    <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="tim-icons icon-single-02" /> Customer Success
                        </td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-calendar-60" /> Jan 2017 - May 2017
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-compass-05" /> Waterloo, ON
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                  <h4 className="title">Coop 4 & 5</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/coop-logo-symbility.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Symbility</h3>
                    <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="tim-icons icon-single-02" /> Product Coordinator
                        </td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-calendar-60" /> Aug 2017 ~ Sept 2018
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-compass-05" />  Toronto, ON
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                  <h4 className="title">Coop 6</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/lifion.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Lifion by ADP</h3>
                    <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="tim-icons icon-single-02" /> Technical Product Owner
                        </td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-calendar-60" /> Jan 2019 - May 2019
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-compass-05" /> New York City, NY
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                  <h4 className="title">Coop 7</h4>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/msft.png")}
                      />
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Microsoft</h3>
                    <Table className="tablesorter" responsive>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          <i className="tim-icons icon-single-02" /> Program Manager
                        </td>
                      </tr>
                      <tr>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-calendar-60" /> Sept 2019 - Dec 2019
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                        <i className="tim-icons icon-compass-05" /> Redmond, WA
                        </td>
                      </tr>
                    </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
