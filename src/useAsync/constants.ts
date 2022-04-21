import type { State } from './interface';

export const initialDefaultState: State<null> = {
  stat: 'idle',
  data: null,
  error: null,
};

export const defaultConfig = {
  throwOnError: false,
};
