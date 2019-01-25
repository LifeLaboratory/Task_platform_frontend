import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import {ConnectedRouter} from "connected-react-router";
import EventListContainer from "../containers/EventListContainer";
import HeaderContainer from "../containers/HeaderContainer";
import EventContainer from "../containers/EventContainer";

const NoMatch = () => <h2>404 (Not found)</h2>

const AppRouter = ({history}) => (
  <ConnectedRouter history={history}>
    <div className={"app_container"}>
      <Switch>
        <Route path="/events" exact component={EventListContainer}/>
        <Route path="/event/:id" exact component={EventContainer}/>

        <Redirect exact from="/" to="events"/>

        <Route component={NoMatch}/>

      </Switch>
    </div>
  </ConnectedRouter>
)

export default AppRouter
