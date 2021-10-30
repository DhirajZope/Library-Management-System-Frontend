import React, {Component} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import axios from 'axios';
import AddBook from './components/AddBook';

export default class App extends Component {
  state = {};

  componentDidMount() {
    
    axios.get('users/get_user/').then(
      res => {
        // console.log(res)
        this.setUser(res.data)
        
        // console.log('user'+this.state.user)
      }
    ).catch(
      errors => console.log(errors)
    )
  }

  setUser = user => {
    this.setState({
      user: user
    })

    // console.log(this.state.user)

  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Nav user={this.state.user} setUser={this.setUser} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={() => <Home user={this.state.user} />} /> 
            <Route exact path="/login" component={() => <Login setUser = {this.setUser} />} /> 
            <Route exact path="/register" component={Register} /> 
            <Route exact path="/new" component={props => <AddBook {...props} />} />

          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
