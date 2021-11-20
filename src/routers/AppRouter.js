import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages
import SignIn from "../components/auth/SignIn";
import { DakiScreen } from "../components/daki/DakiScreen";
import DefaultInternal from '../components/layouts/DefaultInternal';
import RoomPage from '../components/pages/room';
import TaskPage from '../components/pages/task';
import ProfilePage from '../components/pages/profile';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/" component={DakiScreen} />
        <Route exact path="/intranet" component={DefaultInternal} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/rooms" component={RoomPage} />
        <Route exact path="/tasks" component={TaskPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
