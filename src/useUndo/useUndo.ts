import React, { useCallback, useState } from 'react';

import type { UndoState } from './interface';

export const useUndo = <T>(
  initialPresent: T,
  undoOptions = {
    redoSize: 50,
    undoSize: 50,
  }
) => {
  const [state, setState] = useState<UndoState<T>>({
    past: [],
    present: initialPresent,
    future: [],
  });
  const { undoSize } = undoOptions;

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(() => {
    setState((prevState) => {
      const { past, future } = prevState;

      if (past.length === 0) return prevState;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      const newFuture = [previous, ...future];

      if (future.length >= undoSize) {
        newFuture.splice(newFuture.length - 1, 1);
      }

      return {
        past: newPast,
        present: previous,
        future: newFuture,
      };
    });
  }, [undoSize]);

  const redo = useCallback(() => {
    setState((prevState) => {
      const { past, future } = prevState;

      if (future.length === 0) return prevState;

      const next = future[0];
      // const newPast = [...past, next];
      const newFuture = future.slice(1);

      return {
        past: [...past, next],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const set = useCallback((newPresent: T) => {
    setState((prevState) => {
      const { past, present } = prevState;

      if (newPresent === present) return prevState;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    });
  }, []);

  const reset = useCallback((newPresent: T) => {
    setState({
      past: [],
      present: newPresent,
      future: [],
    });
  }, []);

  return [
    state,
    {
      set,
      reset,
      undo,
      redo,
      canRedo,
      canUndo,
    },
  ];
};
