import React, {useState} from 'react';
import Constants from '../utilities/Constants';


export default function BookCreateForm() {
    const initialFormData = Object.freeze({
        isbn:"",
        bookName:"",
        authorName:"",
        bookDescription:"",
        category:"",
        amount:"",
        price:""
    });
    const[formData , setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookToCreate = {
            
            isbn:formData.isbn,
            bookName:formData.bookName,
            authorName:formData.authorName,
            bookDescription:formData.bookDescription,
            category:formData.category,
            amount:formData.amount,
            price:formData.price
        };

        const url = 'http://localhost:5014/api/Book';

        
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(bookToCreate)
      })
      .then(response => response.json())
      .then(responseFromServer => {
          console.log(responseFromServer);
          
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
      this.props.onBookCreated(bookToCreate);
    };




  return (
    <div>
        <form className="w-100 px-5">
            <h1 className="mt-5">Create new book</h1>
            <div className="mt-5">
                <label className="h3 form-label">ISBN</label>
                <input value={formData.isbn} name="isbn" type="number" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Book Name</label>
                <input value={formData.bookName} name="bookName" type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Author Name</label>
                <input value={formData.authorName} name="authorName" type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Book Description</label>
                <input value={formData.bookDescription} name="bookDescription" type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Category</label>
                <input value={formData.category} name="category" type="text" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Amount</label>
                <input value={formData.amount} name="amount" type="number" className="form-control" onChange={handleChange} />
            </div>
            <div className="mt-1">
                <label className="h3 form-label">Price</label>
                <input value={formData.price} name="price" type="number" className="form-control" onChange={handleChange} />
            </div>
                <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Submit</button>
                <button onClick={() => this.props.onBookCreated(null)} className="btn btn-secondary btn-lg w-100 mt-3">Cancel</button>
        </form>     
    </div>
        

  )
}