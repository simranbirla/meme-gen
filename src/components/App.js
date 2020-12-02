import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Images from "./Images";
import Meme from "./Meme";
import "../Style/index.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <div className="app__top">
            <Header />
          </div>
          <div className="app__middle">
            <Switch>
              <Route path={"/"} exact component={Images} />
              <Route path={"/:photo"} exact component={Meme} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
