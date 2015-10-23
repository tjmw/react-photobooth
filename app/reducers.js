import Immutable from 'immutable';
import { REQUEST_SNAPSHOT, CAPTURE_SNAPSHOT, RECEIVE_SNAPSHOT } from './actions';

const initialState = Immutable.fromJS({
  snapshots: [],
  isFetchingSnapshot: false
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
    default:
      return state;
  }
}

export default reactPhotoboothApp;
