import React from 'react'
import { Table, Popconfirm, Button } from 'antd';
import { IProduct } from '@/pages/products';

export interface ProductListProps {
  onDelete: (id: number) => void
  products: Array<IProduct>
}

const ProductList: React.FC<ProductListProps> = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (_text: string, record: IProduct) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;
