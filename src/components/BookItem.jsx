import axios from 'axios';
import React, {Component} from 'react'
import { Redirect } from 'react-router';
import '../css/BookItem.css';


export default class BookItem extends Component {

    state = {}

    handleDelete = (e) => {
        e.preventDefault();
        let id = this.props.id
        let choice = window.confirm("Are you sure want to delete "+this.props.title+" ?")
        if(choice) {
            axios.delete('api/library/'+id).then(
                async res => await this.setState({deleteCode: res.status}) 
            ).catch(
                errors => console.log(errors)
            )
        }
    }

    handleUpdate = e => {
        e.preventDefault();
        this.setState({isUpdate: true})
    }

    render() {
        let buttons = '';
        if(this.props.user){
            buttons = (
                <>
                <button className="btn btn-primary mr-2" onClick={this.handleUpdate}>Update</button>
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </>
            )
        }

        if(this.state.isUpdate){
            return <Redirect to={{pathname: '/new', state: {
                isUpdate:true, 
                title: this.props.title,
                author: this.props.author,
                publication: this.props.publication,
                isbn: this.props.isbn,
                id: this.props.id 
            }}} />
        }

        if(this.state.deleteCode === 204) {
            return <Redirect to={'/'} />
        }
        return(
            <div className="listing">
                <div className="book-header">
                    <span className="book-title">{this.props.title }</span> - by <span className="text-muted">{this.props.author}</span>
                </div>
                <div className="info">
                    <p>Publication: <span className="text-muted">{this.props.publication}</span></p>
                    <p>ISBN: <span className="text-muted">{this.props.isbn}</span></p>                    
                </div>
                <div className="controls">
                    {buttons}
                </div>
            </div>
        )
    }
}