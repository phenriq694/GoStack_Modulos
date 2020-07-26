export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: { item }
  }
}

export function getItemsSuccess(data) {
  return {
    type: 'GET_ITEMS_SUCCESS', 
    payload: { data }
  }
}

export function getItemsFailure() { 
  return {
    type: 'GET_ITEMS_FAILURE',
  }
}