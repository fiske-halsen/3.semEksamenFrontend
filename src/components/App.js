import React, { useState } from "react";
import facade from "../utils/apiFacade";
import LogIn, { LoggedIn } from "./LogIn.js";
import Header from "./Header.js";
import Admin from "./Admin.js";
import User from "./User.js";
import { Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => setLoggedIn(true), setError(""))
      .catch((err) => {
        err.fullError.then((e) => setError(e.message));
      });
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <h1> 3.Semester eksamen</h1>
        </Route>
        {!loggedIn ? (
          <div>
            <Route path="/login">
              <LogIn login={login} />
              <p>{error}</p>
            </Route>
          </div>
        ) : (
          <div>
            <div>
              <Route exact path="/login">
                <LoggedIn />
                <button onClick={logout}>Logout</button>
              </Route>
            </div>
            <div>
              <Route path="/user">
                {facade.getRole() === "user" ? (
                  <User />
                ) : (
                  <p>Du er ikke logget ind som user</p>
                )}
              </Route>
            </div>
            <div>
              <Route path="/admin">
                {facade.getRole() === "admin" ? (
                  <Admin />
                ) : (
                  <p>Du er ikke logget ind som admin</p>
                )}
              </Route>
            </div>
          </div>
        )}
      </Switch>
    </div>
  );
}
export default App;
