import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Images from "./Images";
import Meme from "./Meme";
import Login from "./Login";
import "../Style/index.css";

const App = () => {
  const [sign, setSign] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <div className="app__top">
            <Header />
          </div>
          <div className="app__middle">
            <Switch>
              <Route path={"/photos/:photo"} exact component={Meme} />

              {sign ? (
                <Route path={"/"} exact component={Images} />
              ) : (
                <Route
                  path={"/"}
                  exact
                  component={() => <Login sign={sign} setSign={setSign} />}
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
