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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// core pages
import Index from "views/Index.js";
import About from "views/About.js";
import Education from "views/Education.js";
import Experience from "views/Experience.js";
import Contact from "views/Contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index"            render={(props) => <Index {...props} />} />
      <Route path="/about"            render={(props) => <About {...props} />} />
      <Route path="/education"        render={(props) => <Education {...props} />}/>
      <Route path="/experience"            render={(props) => <Experience {...props} />} />
      <Route path="/contact"            render={(props) => <Contact {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>
);
