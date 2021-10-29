import axios from 'axios'
import React, {Component} from 'react'

export default class Home extends Component {

    componentDidMount() {

        axios.get('http://localhost:8000/api/library/').then(
            res => console.log(res)
        ).catch(
            errors => console.log(errors)
        )
    }

    render() {
        return(
            <h1>Home</h1>
        )
    }
}