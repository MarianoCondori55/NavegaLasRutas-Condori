import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
      <div className="border p-4 rounded-md shadow-md">
        <img src={product.image} alt={product.name} className=" h-40 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">Ver Detalle</Link>
      </div>
    );
  }

export default Item;