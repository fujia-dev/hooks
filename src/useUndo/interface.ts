export interface UndoState<T> {
  past: T[];
  present: T;
  future: T[];
  undoSize?: number;
  redoSize?: number;
}
