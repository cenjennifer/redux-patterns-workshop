import * as R from 'ramda';
import {normalizedData} from '../../actions/data.actions';

export const normalizeMiddleware = ({ dispatch }) => (next) => (action) => {
    // filter document actions
    if(action.type.includes('Set') && action.payload.meta.normalizeId) {

       // notify the system about the transformation
       dispatch(normalizedData(action.payload.meta.entity));

       // optimize your data structure
       const data = R.reduce((acc, item) => {
           acc[item.id] = item;
           return acc;
       }, {}, action.payload.data);

       // roll the action forward to the reducer
       next( { ...action, payload:{ data }, meta: { normalizeId: null }  } )
    } else {
        next(action);
    }
};

