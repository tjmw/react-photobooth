import AppDispatcher from '../app-dispatcher.js';
import BaseStore from './base-store.js';

const PLACEHOLDER_SNAPSHOT = 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Wait%20for%20it&w=200&h=150';

let snapshotList = [
  PLACEHOLDER_SNAPSHOT,
  PLACEHOLDER_SNAPSHOT,
  PLACEHOLDER_SNAPSHOT,
  PLACEHOLDER_SNAPSHOT,
  PLACEHOLDER_SNAPSHOT,
]

class _SnapshotStore extends BaseStore {
  getSnapshotList() {
    return snapshotList;
  }
}

const SnapshotStore = new _SnapshotStore();

AppDispatcher.register((payload) => {
  switch(payload.type) {
    case 'snapshot':
      snapshotList.push(payload.image_data);
      snapshotList.shift();
      SnapshotStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SnapshotStore;
