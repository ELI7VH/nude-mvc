import Axios from 'axios';
import { Item } from 'types/Item';

export const createItem = async (body: Partial<Item>) => {
  try {
    await Axios.post('/api/items', body);
  } catch (err) {
    console.error('Add Item Error', err);
  }
};
export const deleteItem = async (id: number) => {
  try {
    await Axios.delete(`/api/items/${id}`);
  } catch (err) {
    console.error('Error deleting item', err);
  }
};
