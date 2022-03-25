import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";

import "./App.scss";
import { Dispatch } from "./store";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export interface AppProps {
  initAll?: any;
}

const App: React.FC<AppProps> = ({ initAll }) => {
  const [fullLoading, setFullLoading] = useState<boolean>(false);
  const [t] = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      const result = await initAll();
      if (result) {
        setFullLoading(true);
      }
    };
    loadData().catch(console.error);
  }, [setFullLoading, initAll]);

  return fullLoading ? (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ) : (
    <div className="loader-element">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{t("general.loading")}</span>
      </Spinner>
      <p>{t("general.loading")}</p>
    </div>
  );
};

const mapDispatch = (dispatch: Dispatch) => ({
  initAll: async () =>
    Promise.all([
      dispatch.socialLinks.getAsync(),
      dispatch.about.getAsync(),
      dispatch.team.getAsync(),
      dispatch.about.getAsync(),
      dispatch.office.getAsync(),
      dispatch.contact.getAsync(),
      dispatch.address.getAsync(),
      dispatch.actions.getAsync(),
    ]),
});

export default connect(null, mapDispatch)(App);
