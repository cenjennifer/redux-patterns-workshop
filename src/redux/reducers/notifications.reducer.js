import * as R from 'ramda';
import {SET_NOTIFICATION, REMOVE_NOTIFICATION} from "../actions/notification.actions";

export const notificationsReducer = (notifications = {}, action) => {
  const {type} =action;

  switch (true) {
    case type.includes(SET_NOTIFICATION):
      const { payload:{ data: notification }} = action;

      return {...notifications, [notification.id]: notification };

    case type.includes(REMOVE_NOTIFICATION):
      const { payload:{data: id}} = action;

      return R.dissoc(id, notifications);

    default:
      return notifications;
  }
};
