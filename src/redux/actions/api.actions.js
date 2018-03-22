export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

export const apiRequest = (body, method, url, entity) => ({
  type   : API_REQUEST,
  payload: {
    data: body,
    meta: {method, url, entity}
  }
});

export const apiError = (error, entity) => ({
  type   : API_ERROR,
  payload: {
    data: error,
    meta: {entity}
  }
});

export const apiSuccess = (response, entity) => ({
  type   : API_SUCCESS,
  payload: {
    data: response,
    meta: {entity}
  }
});
