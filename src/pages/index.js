import React from "react";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "../configs/routes";

const customHistory = createBrowserHistory();

const App = (props) => {
  let { loading } = props;

  const routesToPages = () => {
    let result;
    if (routes)
      result = routes.map((r, i) => (
        <Route key={i} path={r.path} exact={r.exact} component={r.component} />
      ));
    return <Switch>{result}</Switch>;
  };

  return (
    <Router history={customHistory}>
      {routesToPages()}
    </Router>
  );
};

export default connect(
  (state) => ({
    loading: state.reducers.loading,
  }),
  { }
)(App);