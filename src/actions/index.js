import * as types from '../constants/actionTypes';

export const addField = (payload) => ({type: types.ADD_FIELD, payload});
export const delField = (payload) => ({type: types.DEL_FIELD, payload});
export const changeField = (payload) => ({type: types.CHANGE_FIELD, payload});
export const submit = (payload) => ({type: types.SUBMIT, payload});

