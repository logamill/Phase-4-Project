import Wheel from "./Wheel";
import PersonalPage from "./PersonalPage";
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
          <Wheel />
        </Route>
        <Route exact path="/home">
          <PersonalPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
