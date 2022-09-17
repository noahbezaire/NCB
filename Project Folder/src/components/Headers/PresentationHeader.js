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
import { Button, Container } from "reactstrap";

export default function PresentationHeader() {
  const scrollPage = (e) => {
    e.preventDefault();
    document.getElementById("pricing").scrollIntoView();
  };
  return (
    <>
      <div className="page-header">
        <img alt="..." className="path" src={require("assets/img/blob.png")} />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png")}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("assets/img/triunghiuri.png")}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("assets/img/waves.png")}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("assets/img/patrat.png")}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("assets/img/cercuri.png")}
        />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              <small className="text-warning">Noah Bezaire</small>
            </h1>
            <h3>
              <i>
                Management Engineering Graduate
                </i>
            </h3>
            <Button
              className="btn-simple mt-4"
              color="warning"
              href="#"
              size="lg"
              target="_blank"
            >
              Contact
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
