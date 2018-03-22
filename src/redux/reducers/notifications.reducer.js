import {SET_NOTIFICATION} from "../actions/notification.actions";

export const notificationsReducer = (notifications = [], action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_NOTIFICATION:
      return [...notifications, payload.data]

    default:
      return notifications;
  }
};
