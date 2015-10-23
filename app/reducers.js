import Immutable from 'immutable';
import {
  REQUEST_SNAPSHOT,
  CAPTURE_SNAPSHOT,
  RECEIVE_SNAPSHOT,
  DECREMENT_COUNTDOWN,
  RESET_COUNTDOWN
} from './actions';

const INITIAL_COUNTER_STATE = 3;

const initialState = Immutable.fromJS({
  snapshots: [],
  isFetchingSnapshot: false,
  counter: INITIAL_COUNTER_STATE
});

function reactPhotoboothApp(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SNAPSHOT:
      return state.set('isFetchingSnapshot', true);
    case CAPTURE_SNAPSHOT:
      return state;
    case RECEIVE_SNAPSHOT:
      return state
        .set('isFetchingSnapshot', false)
        .update('snapshots', list => list.push(action.image_data));
    case DECREMENT_COUNTDOWN:
        return state.update('counter', counter => counter - 1);
    case RESET_COUNTDOWN:
      return state.set('counter', INITIAL_COUNTER_STATE);
    default:
      return state;
  }
}

export default reactPhotoboothApp;
