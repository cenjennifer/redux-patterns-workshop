import {FETCH_BOOKS} from "../../actions/books.actions";
import {apiRequest} from "../../actions/api.actions";
import {setLoader} from "../../actions/ui.actions";

const BOOKS = '[books]';

export const booksMiddleware = ({getState, dispatch}) => (next) => (action) => {
  next(action);

  switch (action.type) {

    case FETCH_BOOKS:
      next([
        apiRequest(null, 'GET', '/books', BOOKS),
        setLoader(true, BOOKS)
      ]);
  }
};
