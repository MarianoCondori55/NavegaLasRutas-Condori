import React from 'react';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200.99 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 3, name: 'Table', category: 'Furniture', price: 150.50 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 85.75 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 }
];

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;