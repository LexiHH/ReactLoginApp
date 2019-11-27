import React from 'react';
import ShowAllData from './showAllData';
import CreateUser from './createUser'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to='/'>Home</Link>
                    <Link to='/showAllData'>Show Data</Link>
                    <Link to='/createUser'>Create User</Link>
                    <div>
                        <Route exact path='/showAllData' component={ShowAllData}/>
                        <Route exact path='/createUser' component={CreateUser}/>
                    </div>
                </Router>
            </div>
        )
    }
}