import { BUG_ADDED, BUG_REMOVED } from './actionTypes';

export const bugAdded = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description: 'Bug1',
    },
  };
};

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}
