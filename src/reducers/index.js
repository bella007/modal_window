import initialState from '../constants/initialState';
import * as types from '../constants/actionTypes';


const initial = JSON.parse(localStorage.getItem('posts')) || initialState.fields
export default function categories(state = initial, action) {
    let { type, payload } = action;

    switch (type) {
        case types.ADD_FIELD:
            return [...state, payload];
        case types.DEL_FIELD:
            // console.log(payload,"reduseeeeeeeeeeeeer")
            // console.log( state.filter((item, index) => index !== payload))
            return state.filter((item, index) => index !== payload);
        case types.CHANGE_FIELD:
            // let a = state.forEach((item,index)=>{
            //     if(index==payload.ind){
            //         item.sel_field=payload.sel_field;
            //         item.text_field=payload.text_field;}});
            console.log (state)

            return state.forEach((item,index)=>{
                if(index==payload.ind){
                    item.sel_field=payload.sel_field;
                    item.text_field=payload.text_field;}});

        case types.SUBMIT:
            return payload.forEach((item,index)=> {
                // console.log(state[item.ind].sel_field)
                // console.log(item.sel_field)
                state[item.ind].sel_field = item.sel_field;
                state[item.ind].text_field = item.text_field
            })

        default:
            return state;
    }
};