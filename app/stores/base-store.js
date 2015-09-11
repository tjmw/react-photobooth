import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb) {
    this.off(CHANGE_EVENT, cb);
  }
}

export default BaseStore;
