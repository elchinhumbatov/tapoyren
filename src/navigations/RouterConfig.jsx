import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
const Main = lazy(() => import("../pages/Main/Main"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

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
        </Switch>
      </Suspense>
    </div>
  );
}

export default RouterConfig;
