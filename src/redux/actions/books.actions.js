import {BOOKS} from '../constants/entities';

export const FETCH_BOOKS = `${BOOKS} Fetch`;
export const SET_BOOKS   = `${BOOKS} Set`;

export const fetchBooks = (query) => ({
    type: FETCH_BOOKS,
    payload: {
      data: query
    }
});

export const setBooks = (books, normalizeId) => ({
  type: SET_BOOKS,
  payload: {
    data: books,
    meta: { normalizeId, entity: BOOKS }
  }
});
