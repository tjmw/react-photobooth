import AppDispatcher from './app-dispatcher.js';
import BaseStore from './base-store.js';

class _PhotoStore extends BaseStore {}

const PhotoStore = new _PhotoStore();

AppDispatcher.register((payload) => {
  switch(payload.type) {
    case 'take-snapshot':
      PhotoStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default PhotoStore;
