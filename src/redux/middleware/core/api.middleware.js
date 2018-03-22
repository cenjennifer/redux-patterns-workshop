import {API_REQUEST} from "../../actions/api.actions";
import {apiError, apiSuccess} from "../../actions/api.actions";

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if(action.type.includes(API_REQUEST)) {
    const { meta } = action.payload;

    fetch(meta.url, { method: meta.method })
      .then( response => response.json())
      .then( data => dispatch(apiSuccess(data, meta.entity)))
      .catch( error => dispatch(apiError(error, meta.entity)))
  }
};

