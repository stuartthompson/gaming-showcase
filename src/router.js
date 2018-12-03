import React from "react";
import { Router } from "@reach/router";
import {
  HomeView,
  GameListView,
  GameDetailView,
  FeedView
} from "./views";
import LogoutView from "./views/LogoutView";

const AppRouter = () => (
  <Router>
    <HomeView path="/" />
    <GameListView path="/games" />
    <GameDetailView path="/games/:gameid" />
    <FeedView path="/feed" />
    <LogoutView path="/logout" />
  </Router>
);

export default AppRouter;
