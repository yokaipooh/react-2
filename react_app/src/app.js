import {React} from 'react'
import HomePage from './components/User'
import UserDetail from './components/UserDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return(
        <Router>
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/UserDetail/:id" exact component={UserDetail} />
            </Switch>
        </Router>
        
    )
}

export default App;