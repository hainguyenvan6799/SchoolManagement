import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Elearning Management</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        {
                            this.props.isLogin ? (
                                <Link className="nav-item nav-link" to="/signout">Sign out</Link>
                            ) : (
                            <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                            )
                        }
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        )
    }
}