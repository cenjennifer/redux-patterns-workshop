import {SET_BOOKS} from "../actions/books.actions";

export const booksReducer = (books = [], action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_BOOKS:
      return payload.data.items;

    default:
      return books;
  }
};
