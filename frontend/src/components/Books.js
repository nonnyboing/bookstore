import React, { Component } from 'react';
import axios from 'axios';
import {Card} from './Card';
import Modal from './Modal';

export default class Books extends Component {

    constructor(){
        super();
        this.state = {
            books: [],
            token: ''
        }; 
    }

    componentDidMount() {
        this.setState({token: this.props.location.state.auth});
        axios.get('/books')
            .then(res => this.setState({books: res.data}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='container border' style={{backgroundColor: "#fceed1"}}>
                <div className='row border bg-warning justify-content-around'>
                    <Modal token={this.state.token}/>
                </div>
                <div className='row border justify-content-around'>
                    {this.state.books.map(book => <Card key={book._id} mybook={book} token={this.state.token} />)}
                </div>
            </div>
        )
    }
}