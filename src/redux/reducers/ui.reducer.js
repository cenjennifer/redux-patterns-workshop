import * as R from 'ramda';
import {SET_LOADER} from "../actions/ui.actions";

const initState = {
  loader: false
};

const loader = R.lensProp('loader');

export const uiReducer = (ui =initState, action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_LOADER:
      return R.set(loader, payload.data, ui);

    default:
      return ui;
  }
};
