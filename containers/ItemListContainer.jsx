import React, { useEffect, useState } from 'react';
import ItemList from '../src/components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        const allProducts = [
            { id: 1, name: 'Buzo Rojo', category: 'buzos', price: 1200, image: '../public/img/buzoRojo.jpeg' },
            { id: 2, name: 'Remera Azul', category: 'remeras', price: 500, image: '../public/img/remeraAzul.png' },
            { id: 3, name: 'Pantalón Negro', category: 'pantalones', price: 800, image: '../public/img/pantalonNegro.webp' },
            { id: 4, name: 'Buzo Verde', category: 'buzos', price: 1300, image: '../public/img/buzoVerde.webp' },
          ];
          
        resolve(allProducts);
      }, 1000);
    });

    fetchProducts.then((res) => {
      if (category) {
        setProducts(res.filter(product => product.category === category));
      } else {
        setProducts(res);
      }
    });
  }, [category]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
