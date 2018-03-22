import {combineReducers} from 'redux';
import {booksReducer} from "./books.reducer";
import {uiReducer} from "./ui.reducer";
import {notificationsReducer} from "./notifications.reducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  notifications: notificationsReducer,
  ui: uiReducer
});
