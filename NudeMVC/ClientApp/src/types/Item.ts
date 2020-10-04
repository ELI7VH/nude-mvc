export enum Category {
  Electronics,
  Clothing,
  Kitchen,
}

export type Item = {
  id: number;
  name: string;
  value: string;
  category: Category;
};
