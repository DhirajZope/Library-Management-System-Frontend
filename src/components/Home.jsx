// import axios from 'axios'
import axios from 'axios';
import React, {Component} from 'react'
import BookItem from './BookItem';

export default class Home extends Component {

    state = {};
    componentDidMount() {
        axios.get('api/library/').then(
            async res => {
                await this.setState({books: res.data})
                console.log(this.state.books)
            }
        ).catch(
            errors => console.log(errors)
        )
    }

    render() {
        if(this.props.user) {
            if(this.state.books)
            return(
                <div>
                    <h1 className="text-center font-weight-600">Library Management System</h1>
                    {
                        this.state.books.map(book => {
                            return <BookItem key={book.id} id={book.id} title={book.title} publication={book.publication} isbn={book.isbn} author={book.author} user={true} />
                        })
                    }
                </div>
            )
        }
        if(this.state.books){
            return(
                <div>
                    <h1 className="text-center font-weight-600">Library Management System</h1>
                    {
                        this.state.books.map(book => {
                            return <BookItem key={book.id} id={book.id} title={book.title} publication={book.publication} isbn={book.isbn} author={book.author} user={false} />
                        })
                    }
                </div>
            )
        }
        return (
            <div>
                    <h1 className="text-center font-weight-600">Library Management System</h1>
                    <div className="alert alert-secondary text-center">
                        <h4>No Content</h4>
                    </div>
            </div>
        )
        
    }
}