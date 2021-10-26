import * as React from "react";

import { Switch, Link, Route } from "react-router-dom";
import NoSsr from '@mui/core/NoSsr';


import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

/**
 * how you used the components
 */
export default function Layout() {
  return (
    <div style={{ display: "flex", height: "98vh" }}>
      <div style={{ margin: "10px", display: "flex", flexDirection: "column" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>home </button>
        </Link>
        <Link to="/page1" style={{ textDecoration: "none" }}>
          <button>Page 1</button>
        </Link>
        <Link to="/page2" style={{ textDecoration: "none" }}>
          <button>Page 2</button>
        </Link>
        <Link to="/page3" style={{ textDecoration: "none" }}>
          <button>Page 3</button>
        </Link>
      </div>
      <div style={{ margin: "10px", flex: 1, backgroundColor: "#f7f7f7" }}>
        <Switch>
          <Route path="/page1" name="page1" component={Page1} />
          <Route path="/page2" name="page2" component={Page2} />
          <Route path="/page3" name="page3" component={Page3} />
        </Switch>
      </div>
    </div>
  );
}
