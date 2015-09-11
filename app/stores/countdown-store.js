import AppDispatcher from '../app-dispatcher.js';
import BaseStore from './base-store.js';

const TIMEOUT_LENGTH = 3;

let timeLeft;
let timer;

class _CountdownStore extends BaseStore {
  getTimeLeft() {
    return timeLeft;
  }
}

const CountdownStore = new _CountdownStore();

let initiateCountdown = () => {
  clearTimeout(timer);
  timeLeft = TIMEOUT_LENGTH;

  timer = setInterval(() => {
    timeLeft = timeLeft - 1;

    if (timeLeft == 0) {
      clearTimeout(timer);
      CountdownStore.emitChange();
      timeLeft = null;
    }

    CountdownStore.emitChange();
  }, 1000);
}

AppDispatcher.register((payload) => {
  switch(payload.type) {
    case 'initiate-countdown':
      initiateCountdown();
      CountdownStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default CountdownStore;
