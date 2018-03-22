import {SET_NOTIFICATION} from "../actions/notification.actions";

export const notificationsReducer = (notifications = [], action) => {
  const { type, payload } = action;

  switch (true) {

    case type.includes(SET_NOTIFICATION):
      return [...notifications, payload.data];

    default:
      return notifications;
  }
};
