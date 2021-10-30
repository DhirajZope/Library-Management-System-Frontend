import axios from 'axios';
import React, {Component} from 'react'
import { Redirect } from 'react-router';


export default class AddBook extends Component {
    state = {};

    componentDidMount() {
        if(this.props.location.state){
            // console.log(this.props.location.state.isUpdate)
            if(this.props.location.state.isUpdate)
                this.setState({
                    title: this.props.location.state.title,
                    author: this.props.location.state.author,
                    publication: this.props.location.state.publication,
                    isbn: this.props.location.state.isbn
                });
        }
        else{
            this.setState({
                title: '',
                author: '',
                publication: '',
                isbn: ''
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            author: this.state.author,
            publication: this.state.publication,
            isbn: this.state.isbn
        }

        // console.log(data)
        if(this.props.location.state){
            if(this.props.location.state.isUpdate){
                let config = {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }
                
                axios.put('api/library/'+this.props.location.state.id, data, config).then(
                    async res => {
                        // await console.log(typeof(res.status))
                        await this.setState({statusCode: res.status})
                    }
                ).catch(
                    errors => console.log(errors)
                )
            }
        }
        else {
            axios.post('api/library/', data).then(
                async res => {
                    // await console.log(typeof(res.status))
                    await this.setState({statusCode: res.status})
                }
            ).catch(
                errors => console.log(errors)
            )
        }
        
    }

    render() {
        if(this.state.statusCode === 201 || this.state.statusCode === 200){
            return <Redirect to={'/'} />
        }
        return(
            <>
            <h1 className="text-center">Add Book</h1>
            <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="title" className="form-control" value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Author</label>
                    <input type="text" name="author" id="author" className="form-control" value={this.state.author} onChange={e => this.setState({author: e.target.value}) } />
                </div>

                <div className="form-group">
                    <label htmlFor="">Publication</label>
                    <input type="text" name="publication" id="publication" className="form-control" value={this.state.publication} onChange={e => this.setState({publication: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="">ISBN</label>
                    <input type="number" name="isbn" id="isbn" className="form-control" value={this.state.isbn} onChange={e => this.setState({isbn: e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary">Add Record</button>
            </form>
            </>
        )
    }
}