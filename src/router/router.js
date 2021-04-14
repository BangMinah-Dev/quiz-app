import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "../components/start";
import HomePage from "../components/homePage";
import Result from "../components/result"

export default function router() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/result">
                        <Result></Result>
                    </Route>
                    <Route path="/home">
                        <HomePage></HomePage>
                    </Route>
                    <Route exact path="/">
                        <Start></Start>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
