import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getItemsFailure, getItemsSuccess } from './actions';

export function* getItems() {
  try {
    const response = yield call(api.get, 'items');

    yield put(getItemsSuccess(response.data));
  } catch (err) {
    yield put(getItemsFailure());
  }
}