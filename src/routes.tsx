import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import LetterRegister from "./pages/LetterRegister";
import LetterList from "./pages/LetterList";
import LetterDetail from "./pages/LetterDetail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/letters/create" component={LetterRegister} />
        <Route path="/letters" exact component={LetterList} />
        <Route path="/letters/:id" component={LetterDetail} />        
      </Switch>
    </BrowserRouter>
  );
}
