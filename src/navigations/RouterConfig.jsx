import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
const Main = lazy(() => import("../pages/Main/Main"));
// const Shops = lazy(() => import("../pages/Shops/Shops"));

function RouterConfig() {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div>loading..</div>}>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default RouterConfig;
