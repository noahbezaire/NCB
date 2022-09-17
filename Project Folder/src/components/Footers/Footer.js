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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <>
    <footer className="footer" data-background-color="black">
      <Container>
        <a
          className="footer-brand"
          to="/index"
          tag={Link}
        >
          NB • Noah Bezaire
        </a>
        <ul className="pull-center">
        <li>
          <NavLink to="/Index" tag={Link}> Home </NavLink>
        </li>
          <li>
            <NavLink to="/About" tag={Link}> About </NavLink>
          </li>
          <li>
            <NavLink to="/Education" tag={Link}> Education </NavLink>
          </li>
          <li>
            <NavLink to="/Experience" tag={Link}> Experience </NavLink>
          </li>
        </ul>
        <ul className="social-buttons pull-right">
          <li>
            <Button
              className="btn-icon btn-neutral"
              color="link"
              href="https://www.linkedin.com/in/ncbezaire/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </Button>
          </li>
          <li>
            <Button
              className="btn-icon btn-neutral ml-1"
              color="link"
              href="https://www.facebook.com/noahbezaire"
              target="_blank"
            >
              <i className="fab fa-facebook-square" />
            </Button>
          </li>
          <li>
            <Button
              className="btn-icon btn-neutral ml-1"
              color="link"
              href="https://www.instagram.com/ncbezaire/"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </Button>
          </li>
        </ul>
      </Container>
    </footer>
    </>
  );
}
