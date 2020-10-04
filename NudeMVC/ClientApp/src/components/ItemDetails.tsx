import { Col, Row } from 'antd';
import React from 'react';
import { Item } from 'types/Item';
import * as api from 'api';
import { DeleteTwoTone } from '@ant-design/icons';

type Props = {
  item: Item;
};

export const ItemDetails = ({ item }: Props) => {
  const handleDelete = async () => {
    await api.deleteItem(item.id);
    // TODO: sockets, etc.
    window.location.reload();
  };

  return (
    <Row
      className="item-row"
      justify="space-between"
      title={item.name}
      align="middle"
    >
      <Col span={8}>
        <Row justify="space-between">
          <h3>{item.name}</h3>
          <h3>${item.value}</h3>
        </Row>
      </Col>
      <DeleteTwoTone onClick={handleDelete} />
    </Row>
  );
};
