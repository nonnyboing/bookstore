import React from 'react'
import axios from 'axios';

export const Card = (props) => {
    const { title, author, year, price } = props.mybook;
    const key = props.mybook._id;
    const token = props.token;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    
    const handleClick = (event) => {
        const id = event.target.id;
        const url = '/books/'+id;
        
        axios.delete(url, config)
            .then((res)=> {console.log(res.data)})
            .catch(err => console.log(err));

        setTimeout(()=> {window.location.reload(true)}, 1000);
            //window.location.reload(true);
        
    }

    return (
        <div className='col-sm-4 mb-2 mt-2'>
           <div className="card">
                <div className="card-body text-primary">
                    <h5 className="card-title h5">Title: {title} </h5>
                    <p className="card-text"> Author: {author} </p>
                    <p className="card-text"> Published: {year} </p>
                    <p className="card-text"> Price: {price} </p>
                    <p className="btn btn-danger" onClick={handleClick} id={key}>Delete</p>
                </div>
            </div> 
        </div>
    )
}