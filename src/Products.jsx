// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './reduxtoolkit3/authSlice';

const Product = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 2', description: 'Description 2' },
    // Add more products as needed
  ];

  const handleAddToCart = (e) => {
    dispatch(addToCart(e));
  };
  

  return (
    <>
    {
        products.map((e)=>{
            return <div key={e.id}>
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <button onClick={()=>{handleAddToCart(e.id)}}>Add to Cart</button>
          </div>
        })
    }
    </>
    
  );
};

export default Product;
