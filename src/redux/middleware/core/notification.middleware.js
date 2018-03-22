import {CREATE_NOTIFICATION, setNotification, removeNotification} from "../../actions/notification.actions";


export const notificationMiddleware = () => (next) => (action) => {
  next(action);

  if(action.type.includes(CREATE_NOTIFICATION)) {
    const {data, meta} = action.payload;
    const id = new Date().getMilliseconds();

    const notification = {
      id,
      massage: data
    };

    next(setNotification(notification, meta.entity));

    setTimeout( () => next(removeNotification(id, meta.entity)), 5000)
  }
};

