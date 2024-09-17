import React, { useEffect, useState } from 'react';
import ItemDetail from '../src/components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const allProducts = [
          { id: 1, name: 'Buzo Rojo', category: 'buzos', price: 1200, image: '../public/img/buzoRojo.jpeg' },
          { id: 2, name: 'Remera Azul', category: 'remeras', price: 500, image: '../public/img/remeraAzul.png' },
          { id: 3, name: 'Pantalón Negro', category: 'pantalones', price: 800, image: '../public/img/pantalonNegro.webp' },
          { id: 4, name: 'Buzo Verde', category: 'buzos', price: 1300, image: '../public/img/buzoVerde.webp' },
        ];
        const foundProduct = allProducts.find(product => product.id === parseInt(id));
        resolve(foundProduct);
      }, 1000);
    });

    fetchProduct.then((res) => setProduct(res));
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;
