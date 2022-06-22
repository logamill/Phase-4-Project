import Wheel from "./Wheel";
import NewWheel from "./NewWheel"
import PersonalPage from "./PersonalPage";
import HomePage from "./HomePage";
import React, {useState, useEffect} from 'react';
import Login from "./Login";
import Navigation from "./Navigation";
import CustomCursor from "./CustomCursor/CustomCursor";
import "../sass/main.scss";
import { Routes, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <CustomCursor />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/projects">
          <Wheel/>
        </Route>
        <Route exact path="/user">
          <PersonalPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
