import React from 'react';
import { Layout, Result, Spin } from 'antd';
import { Category, Item } from 'types/Item';
import { useGet } from 'hooks/useGet';
import { sumBy } from 'lodash';
import { CategoryWidget } from 'components/CategoryWidget';

import 'antd/dist/antd.css';
import 'css/app.css';

export const Home = () => {
  const items = useGet<Item[]>('/api/items');

  if (items.loading) return <Spin />;
  if (items.error)
    return <Result status="error" title="Error getting items from API" />;

  return (
    <Layout>
      <Layout.Header className="header">
        <h1>Asset Listing App</h1>
      </Layout.Header>

      {[Category.Electronics, Category.Clothing, Category.Kitchen].map(
        (category) => (
          <CategoryWidget
            key={`category-widget-${category}`}
            category={category}
            items={items.data.filter((item) => item.category === category)}
          />
        )
      )}

      <Layout.Footer className="footer">
        <h2>Total: ${sumBy(items.data, 'value')}</h2>
      </Layout.Footer>
    </Layout>
  );
};
