export const FETCH_BOOKS = '[books] Fetch';
export const SET_BOOKS   = '[books] Set';

export const fetchBooks = (query) => ({
    type: FETCH_BOOKS,
    payload: {
      data: query
    }
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    data: books
  }
});
