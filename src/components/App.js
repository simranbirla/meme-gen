import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Images from "./Images";
import Meme from "./Meme";

const App = () => {
  return (
    <div className="app">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__middle">
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Images} />
            <Route path={"/:photo"} exact component={Meme} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
