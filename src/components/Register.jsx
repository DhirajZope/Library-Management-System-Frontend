import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {
    
    handleSubmit = (event) => {
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password2: this.confirmPassword
        }

        axios.post('users/register/', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )

        event.preventDefault()
        console.log(data)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} method="POST" >
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="first_name" id="first_name" className="form-control" onChange = {e => this.firstName = e.target.value} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="last_name" id="last_name" className="form-control" onChange = {e => this.lastName = e.target.value} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange = {e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange = {e => this.password = e.target.value} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="password2" id="password2" className="form-control" onChange = {e => this.confirmPassword = e.target.value} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        )
    }
}
