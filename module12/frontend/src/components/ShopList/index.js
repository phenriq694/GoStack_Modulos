import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addItem }from '../../store/modules/items/actions';

export default function ShopList() {
  const [newItem, setNewItem] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  function handleAddItem() {
    dispatch(addItem(newItem));
    setNewItem('');
  }

  return (
    <form data-testid="item-form" onSubmit={handleAddItem}>
      <ul data-testid="item-list">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>

      <label htmlFor="item">Item</label>
      <input id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />

      <button onClick={handleAddItem}>Adicionar</button>
    </form>
  );
}