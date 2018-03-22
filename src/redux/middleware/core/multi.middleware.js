
// utility for supporting array of actions
export const multiMiddleware = () => (next) => (action) => {
  if(Array.isArray(action)) {
      action.forEach( _action => next(_action) );
  } else {
    next(action);
  }
};
