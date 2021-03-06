import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom';
import Addproject from './addproject';
import Editproject from './editproject';
import Projectlist from './projectlist';


class Projects extends Component {
    render() {
        return (
            <Router>
            <div>       
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/projectlist">List</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/addproject">Add</Link>
                            </li>   
                        </ul>
                        </div>
                    </div>
                </nav> 
            </div>
            <Switch> 
                <Route path="/projectlist"><Projectlist/></Route>                
                <Route path="/addproject"><Addproject /></Route>        
                <Route path="/editprojects/:id"><Editproject/></Route>        
            </Switch>
            </Router>
        )
    }
}
export default withRouter(Projects);