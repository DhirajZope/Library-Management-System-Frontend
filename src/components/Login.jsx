import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class Login extends Component {

    state = {};

    handleSubmit = (e) => {
        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('http://localhost:8000/users/login/', data).then(
            res => {
                localStorage.setItem('token', res.data.token)
                this.setState({
                    loggedIn: true
                })
            } 
        ).catch(
            errors => console.log(errors)
        )

        e.preventDefault()
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to={'/'} />
        }

        return (
            <form onSubmit={this.handleSubmit} method="POST" >
                <h3>Log In</h3>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange = {e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange = {e => this.password = e.target.value} />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        )
    }
}
