import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";

const Home = lazy(() => import("./pages/Home/Home"));
const AddBook = lazy(() => import("./pages/AddBook/AddBook"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-book" component={AddBook} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
