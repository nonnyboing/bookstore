import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Login'
import Regform from './Regform'
//import Modal from './Modal'
import Books from './Books';

export const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand font-weight-bold mr-3">BOOKSHOP</h1>

                    <div className="collapse navbar-collapse font-weight-bold" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link mr-sm-3 ml-sm-3" to={'/login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-sm-3" to={'/register'}>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/books'}>Books</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Regform}/>
                    <Route exact path='/books' component={Books}/>
                </Switch>
            </div>
        </Router>
    )
}