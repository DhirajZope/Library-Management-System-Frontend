import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        let navs;
        if(this.props.user){
            navs = (<form className="form-inline my-2 my-lg-0">
                <Link className="btn btn-outline-secondary mx-2" to={'/logout'}>Logout</Link>
            </form>)
        }
        else {
            navs = (
                <form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-outline-success mx-2" to={'/login'}>Login</Link>
                    <Link className="btn btn-outline-light" to={'/register'}>Register</Link>
                </form>
            )
        }
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to={'/'}>Library System</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                            </li>
        
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <Link className="btn btn-outline-success mx-2" to={'/login'}>Login</Link>
                            <Link className="btn btn-outline-light" to={'/register'}>Register</Link>

                        </form> */}
                        {navs}
                    </div>
                </nav>
        )
    };
}