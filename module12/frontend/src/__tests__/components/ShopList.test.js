import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { addItem }from '../../store/modules/items/actions';

import ShopList from '~/components/ShopList';

jest.mock('react-redux');

describe('ShopList component', () => {
  it('should render shop list', () => {
    useSelector.mockImplementation(cb => cb({
      items: ['Notebook', 'iPhone']
    }));

    const { getByText, getByTestId } = render(<ShopList />);

    expect(getByTestId('item-list')).toContainElement(getByText('Notebook'));
    expect(getByTestId('item-list')).toContainElement(getByText('iPhone'));    
  });

  it('should be able to add new item', () => {
    const { getByTestId, getByLabelText } = render(<ShopList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Item'), { target: { value: 'Notebook' } });
    fireEvent.submit(getByTestId('item-form'));

    expect(dispatch).toHaveBeenCalledWith(addItem('Notebook'));
  });
});