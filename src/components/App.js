import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Images from "./Images";
import Meme from "./Meme";
import Login from "./Login";
import SavedImages from "./SavedImages";
import "../Style/index.css";
import Upload from "./Upload";

const App = () => {
  const [sign, setSign] = useState(false);
  const [user, setUser] = useState();
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <div className="app__top">
            <Header setUser={setUser} setSign={setSign} sign={sign} />
          </div>
          <div className="app__middle">
            <Switch>
              <Route
                path={"/photos/:photo"}
                exact
                render={(props) => <Meme {...props} user={user} />}
              />
              <Route
                path={"/saved"}
                exact
                render={(props) => <SavedImages {...props} user={user} />}
              />
              <Route path="/upload" exact component={Upload} />
              {sign ? (
                <Route
                  path={"/"}
                  exact
                  render={(props) => <Images {...props} user={user} />}
                />
              ) : (
                <Route
                  path={"/"}
                  exact
                  render={(props) => (
                    <Login
                      {...props}
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
