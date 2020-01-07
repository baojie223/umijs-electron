import React from 'react';
import { connect, Dispatch } from 'dva';
import ProductList from '../components/ProductList';

export interface IProduct {
  name: string;
  id: number;
}

export interface ProductsProps {
  dispatch: Dispatch;
  products: IProduct[];
}

const Products: React.FC<ProductsProps> = ({ dispatch, products }) => {
  function handleDelete(id: number) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }: { products: IProduct[] }) => ({
  products,
}))(Products);
