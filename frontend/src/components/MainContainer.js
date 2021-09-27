import React from 'react';
import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Signin  from "./Signin";
import  Dashboard from "./Dashboard";
import  Category from "./Category";
import  Question from "./Question";
import  Header from "./Header";

function MainContainer() {
    const isSigninIn = useSelector(state => state.signin.isSigninIn);
    
    if (isSigninIn===false) {
        var CallContainer = <Router>
                                    <Switch>
                                        <Route exact path="/" component={Signin}></Route>
                                    </Switch>
                            </Router>
    }else{ 
        CallContainer = 
        <>
        <Header/>
        <Router>
            <div className="layout">

                    <Switch>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route exact path="/category" component={Category}></Route>
                        <Route exact path="/question" component={Question}></Route>
                    </Switch>
            </div>
        </Router>
        
        </>
    }

    return (
        <>
            {CallContainer}
        </>
    )
}

export default MainContainer