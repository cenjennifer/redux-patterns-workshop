import * as R from 'ramda';
import {SET_LOADER} from "../actions/ui.actions";

const initState = {
  loader: false
};

const loader = R.lensProp('loader');

export const uiReducer = (ui =initState, action) => {
  const { type, payload } = action;

  switch (true) {

    case type.includes(SET_LOADER):
      return R.set(loader, payload.data, ui);

    default:
      return ui;
  }
};
