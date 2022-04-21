type AsyncStat = 'idle' | 'loading' | 'error' | 'success';

export interface State<D> {
  error: Error | null;
  data: D | null;
  stat: AsyncStat;
}
