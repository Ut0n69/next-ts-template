export type Friend = {
  id: number;
  name: string;
  age: number;
};

export * from './action/action';
export * from './selector/selector';

export { default } from './reducer/reducer';
