import React from 'react';
import { Button, Form, Input, InputNumber, message } from 'antd';
import { Store } from 'antd/lib/form/interface';
import * as api from 'api';
import { Category } from 'types/Item';

type Props = {
  category: Category;
};

export const ItemForm = ({ category }: Props) => {
  const handleFinish = async ({ name, value }: Store) => {
    if (!name || !value) {
      message.error('Check all required fields!');
      return;
    }
    await api.createItem({ name, value, category });
    // TODO: socket brouhaha
    window.location.reload();
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item required name="name" label="Asset Name">
        <Input />
      </Form.Item>
      <Form.Item required name="value" label="Value $">
        <InputNumber min={1} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </Form>
  );
};
