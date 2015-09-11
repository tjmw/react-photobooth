import AppDispatcher from './app-dispatcher.js';
import BaseStore from './base-store.js';

let currentSnapshot;

class _SnapshotStore extends BaseStore {
  getSnapshot() {
    return currentSnapshot;
  }
}

const SnapshotStore = new _SnapshotStore();

AppDispatcher.register((payload) => {
  switch(payload.type) {
    case 'snapshot':
      currentSnapshot = payload.image_data;
      SnapshotStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SnapshotStore;
