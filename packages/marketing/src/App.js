import React from "react";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';


export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}