import React from 'react';
import styles from './index.css';
import { Button } from 'antd';

export default function() {
  const goto = () => {
    window.location.href = 'http://localhost:8001/products'
  }
  return (
    <div>
      <Button type="primary" onClick={goto}>按钮</Button>
    </div>
  );
}
