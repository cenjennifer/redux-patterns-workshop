export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const createNotification = (massage, entity) => ({
  type   : `${entity} ${CREATE_NOTIFICATION}`,
  payload: {
    data: massage,
    meta: {entity}
  }
});

export const setNotification = (notification, entity) => ({
  type   : `${entity} ${SET_NOTIFICATION}`,
  payload: {
    data: notification,
    meta: {entity}
  }
});

export const removeNotification = (notificationId, entity) => ({
  type   : `${entity} ${REMOVE_NOTIFICATION}`,
  payload: {
    data: notificationId,
    meta: {entity}
  }
});

