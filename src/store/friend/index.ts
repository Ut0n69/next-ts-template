export type Friend = {
  id: number;
  name: string;
  age: number;
};

export * from './action';
export * from './selector';

export { default } from './reducer';
