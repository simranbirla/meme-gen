import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Images from "./Images";
import Meme from "./Meme";
import Login from "./Login";
import SavedImages from "./SavedImages";
import "../Style/index.css";

const App = () => {
  const [sign, setSign] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <div className="app__top">
            <Header setUser={setUser} setSign={setSign} sign={sign} />
          </div>
          <div className="app__middle">
            <Switch>
              <Route path={"/photos/:photo"} exact component={Meme} />
              <Route path={"/saved"} exact component={SavedImages} />
              {sign ? (
                <Route path={"/"} exact component={Images} />
              ) : (
                <Route
                  path={"/"}
                  exact
                  component={() => (
                    <Login
                      sign={sign}
                      setSign={setSign}
                      user={user}
                      setUser={setUser}
                    />
                  )}
                />
              )}
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
