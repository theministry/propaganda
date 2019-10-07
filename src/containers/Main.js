import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Intro from "../pages/Intro.js";
import Home from "../pages/Home.js";
import Projects from "../pages/Projects.js";
import Studio from "../pages/Studio.js";
import Project from "../pages/Project.js";
import Contact from "../pages/Contact.js";
import NotFound from "../pages/404.js";

import HomeButton from "../components/HomeButton"

const Main = props =>
    <Router>
        <HomeButton />
        <Switch>
            <Route exact path="/" component={ Intro } />
            <Route path="/home" component={ Home } />
            <Route path="/studio" component={ Studio } />
            <Route path="/projects" component={ Projects } />
            <Route exact path="/project"><Redirect to="/projects" /></Route>
            <Route path="/project/:slug" component={ Project } />
            <Route path="/contact" component={ Contact } />
            <Route component={ NotFound } />
        </Switch>
    </Router>

export default Main