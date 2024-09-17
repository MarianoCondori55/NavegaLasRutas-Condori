import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    return (
      <div className="p-4">
        <img src={product.image} alt={product.name} className=" h-60 object-cover rounded-md mb-4" />
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <ItemCount />
      </div>
    );
  }

export default ItemDetail;
