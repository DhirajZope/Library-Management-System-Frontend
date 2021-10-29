import React, {Component} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import axios from 'axios';

export default class App extends Component {
  state = {};

  componentDidMount() {
    
    axios.get('users/get_user/').then(
      res => {
        console.log(res)
        this.isLoggedIn(res.data)
        
        console.log('user'+this.state.user)
      }
    ).catch(
      errors => console.log(errors)
    )
  }

  isLoggedIn = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Nav user={this.state.user} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/register" component={Register} /> 

          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
