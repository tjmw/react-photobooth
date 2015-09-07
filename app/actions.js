import AppDispatcher from './app-dispatcher';

const takeSnapshot = () => {
  AppDispatcher.dispatch({
    type: 'take-snapshot'
  });
};

export default {
  takeSnapshot
};

