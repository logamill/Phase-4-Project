import { useState, useEffect } from "react";
import Wheel from "./Wheel";
import PersonalPage from "./PersonalPage";
import HomePage from "./HomePage";
import Project from "./Project";
import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";
import CustomCursor from "./CustomCursor/CustomCursor";
import "../sass/main.scss";
import { Route, Link, Switch, useHistory } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  const onLogin = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <div className="App">
      <CustomCursor />
      {user ? <Navigation setUser={setUser} user={user} /> : null}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup onLogin={onLogin} />
        </Route>
        <Route exact path="/projects">
          <Wheel />
        </Route>
        <Route exact path="/projects/:id">
          <Project />
        </Route>
        <Route exact path="/me">
          <PersonalPage user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
