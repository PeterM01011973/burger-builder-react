import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {
    logoutSaga,
    checkAuthTimeOutSaga,
    authSaga,
    authCheckStateSaga
} from './auth'

import { initIngredientsSaga }  from './burgerBuilder'
import { purchaseBurgerSaga, fetchOrdersSaga } from './order'

export function* watchAuth() {
    yield all([
         takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
         takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
         takeEvery(actionTypes.AUTH_USER, authSaga),
         takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ])
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder() {
    yield all([
          takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga),
          takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
    ])
}
