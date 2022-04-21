import { useCallback, useReducer } from 'react';

import type { UndoState } from './interface';

const UNDO = 'UNDO';
const REDO = 'REDO';
const SET = 'SET';
const RESET = 'RESET';

interface Action<T> {
  newPresent?: T;
  type: typeof UNDO | typeof REDO | typeof SET | typeof RESET;
}

const undoReducer = <T>(state: UndoState<T>, action: Action<T>) => {
  const { past, present, future } = state;
  const { newPresent, type } = action;

  switch (type) {
    case REDO: {
      if (past.length === 0) return state;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [previous, ...future],
      };
    }

    case RESET: {
      return {
        past: [],
        present: newPresent,
        future: [],
      };
    }

    case SET: {
      if (newPresent === present) return state;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case UNDO: {
      if (past.length === 0) return state;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [previous, ...future],
      };
    }
    default:
      return state;
  }
};

export const useUndoWithReducer = <T>(initialPresent: T) => {
  const [state, dispatch] = useReducer(undoReducer, {
    past: [],
    present: initialPresent,
    future: [],
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(
    () =>
      dispatch({
        type: UNDO,
      }),
    []
  );

  const redo = useCallback(
    () =>
      dispatch({
        type: REDO,
      }),
    []
  );

  const set = useCallback(
    (newPresent: T) =>
      dispatch({
        type: SET,
        newPresent,
      }),
    []
  );

  const reset = useCallback(
    (newPresent: T) =>
      dispatch({
        type: RESET,
        newPresent,
      }),
    []
  );

  return [state, { set, reset, undo, redo, canUndo, canRedo }];
};
