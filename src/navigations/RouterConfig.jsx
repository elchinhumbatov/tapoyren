import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
const Main = lazy(() => import("../pages/Main/Main"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Faq = lazy(() => import("../pages/Faq/Faq"));
const Login = lazy(() => import("../pages/Login/Login"));
const Package = lazy(() => import("../pages/Package/Package"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions/TermsAndConditions"));

function RouterConfig() {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div>loading..</div>}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Redirect from="/tapoyren" to="/" />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/package/:id" component={Package} />
          <Route path="/faq" component={Faq} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/login">
            <Login showRegistr={false} />
          </Route>
          <Route path="/registration">
            <Login showRegistr />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default RouterConfig;
