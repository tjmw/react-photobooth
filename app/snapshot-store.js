import AppDispatcher from './app-dispatcher.js';
import BaseStore from './base-store.js';

const PLACEHOLDER_SNAPSHOT = 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Wait%20for%20it&w=800&h=600';

let currentSnapshot = PLACEHOLDER_SNAPSHOT;

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
