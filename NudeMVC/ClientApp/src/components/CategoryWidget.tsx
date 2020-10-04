import React, { useState } from 'react';
import { Button, Card, Modal } from 'antd';
import { sumBy } from 'lodash';
import { Category, Item } from 'types/Item';
import { ItemDetails } from './ItemDetails';
import { ItemForm } from './ItemForm';

type Props = {
  category: Category;
  items: Item[];
};

export const CategoryWidget = ({ category, items }: Props) => {
  const [newItem, setNewItem] = useState(false);
  // TOOD: get by type for refetching on new / delete

  return (
    <>
      <Card
        className="category-widget"
        title={Category[category]}
        actions={[
          <Button type="primary" onClick={() => setNewItem(true)}>
            Add New {Category[category]} Asset
          </Button>,
        ]}
        extra={`Total: $${sumBy(items, 'value')}`}
      >
        {items.map((item) => (
          <ItemDetails key={`item-row-${item.id}`} item={item} />
        ))}
      </Card>
      <Modal
        title={`New ${Category[category]} Asset`}
        visible={newItem}
        footer={null}
        onCancel={() => setNewItem(false)}
      >
        <ItemForm category={category} />
      </Modal>
    </>
  );
};
