import AppDispatcher from './app-dispatcher';

const snapshot = (image_data) => {
  AppDispatcher.dispatch({
    type: 'snapshot',
    image_data: image_data
  });
};

export default {
  snapshot
};

