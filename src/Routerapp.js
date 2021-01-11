import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Host from "./components/Host";
import Lesson from "./components/Lesson";
import Member from "./components/Member";
import Publish from "./components/Publish";
import Research from "./components/Research";
import Student_porject from "./components/Student_project";
import Home from './Home';


function Routerapp() {
    return(
        <div className='router'>
            <Router basename='/ykliaolab'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Host' component={Host} />
                    <Route path='/Lesson' component={Lesson} />
                    <Route path='/Member' component={Member} />
                    <Route path='/Publish' component={Publish} />
                    <Route path='/Research' component={Research} />
                    <Route path='/Student_porject' component={Student_porject} />
                </Switch>                
            </Router>
        </div>
    );
}

export default Routerapp;