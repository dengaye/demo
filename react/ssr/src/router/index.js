import React from "react";
import { Route } from "react-router-dom";

import Home from "../client/components/home";
import User from "../client/components/user";

export default function Routes() {
  return (
    <section>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={User} />
    </section>
  );
}
