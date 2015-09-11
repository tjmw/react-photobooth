import AppDispatcher from './app-dispatcher';

const snapshot = (image_data) => {
  AppDispatcher.dispatch({
    type: 'snapshot',
    image_data: image_data
  });
};

const initiateCountdown = () => {
  console.log('Countdown initiated');
  AppDispatcher.dispatch({
    type: 'initiate-countdown'
  });
};

export default {
  snapshot,
  initiateCountdown
};

