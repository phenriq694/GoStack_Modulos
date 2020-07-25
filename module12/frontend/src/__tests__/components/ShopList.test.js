import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

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
});