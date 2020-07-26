import produce from 'immer';

export const INITIAL_STATE = [];

export default function items(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_ITEM':
        draft.push(action.payload.item);
        break;
      default:
    }
  });
}