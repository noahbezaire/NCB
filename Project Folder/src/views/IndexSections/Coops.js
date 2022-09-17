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
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Charlie Watson</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/charlie.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Artist <br />
                <strong>Experience:</strong> 5 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Quavo Austen</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Actor <br />
                <strong>Experience:</strong> 1 year
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Lucy</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg")}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> CEO <br />
                <strong>Experience:</strong> 7 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

export default function Teams() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Co-Op Experience</h2>
                <h4 className="description">
                  Sample paragraph goes here that has a couple lines of text so that it doesnt look bad
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                    <h4 className="title">Coop 1</h4>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/emily.jpg")}
                      />
                    </a>
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
                          <i className="tim-icons icon-compass-05" /> Pittsburgh, PA
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      />
                    </a>
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/julie.jpg")}
                      />
                    </a>
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/emily.jpg")}
                      />
                    </a>
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      />
                    </a>
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
                  <h4 className="title">Coop 6</h4>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      />
                    </a>
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
