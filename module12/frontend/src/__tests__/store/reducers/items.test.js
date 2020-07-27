import reducers, { INITIAL_STATE } from '~/store/modules/items/reducer';
import * as Items from '~/store/modules/items/actions';

describe('Items reducer', () => {
  it('DEFAULT', () => {
    const state = reducers(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('ADD_ITEM', () => {
    const state = reducers(INITIAL_STATE, Items.addItem('Notebook'));

    expect(state).toStrictEqual(['Notebook']);
  })
});