import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import NotFound from '../pages/NotFound/NotFound';
import Main from '../pages/Main/Main';
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Search = lazy(() => import("../pages/Search/SearchPage"));
const Faq = lazy(() => import("../pages/Faq/Faq"));
const Login = lazy(() => import("../pages/Login/Login"));
const Course = lazy(() => import("../pages/CoursePage/Course"));
const Package = lazy(() => import("../pages/PackagePage/Package"));
const PackageSubscribe = lazy(() => import("../pages/PackageSubscribe/PackageSubscribe"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions/TermsAndConditions"));

function RouterConfig() {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div className='minH' id='loader-overlay'><div id="lds-ripple"><div></div><div></div></div></div>}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Redirect from="/tapoyren" to="/" />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search" component={Search} />
          <Route path="/course/:id" component={Course} />
          <Route path="/package/:id" component={Package} exact />
          <Route path="/package/:id/subscribe" component={PackageSubscribe} />
          <Route path="/faq" component={Faq} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/login">
            <Login showRegistr={false} />
          </Route>
          <Route path="/registration">
            <Login showRegistr />
          </Route>
          <Route path="/not_found" component={NotFound} />
          {/* <Redirect from="**" to="/not_found" /> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default RouterConfig;
