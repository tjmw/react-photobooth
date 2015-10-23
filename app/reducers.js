import { REQUEST_SNAPSHOT, CAPTURE_SNAPSHOT, RECEIVE_SNAPSHOT } from './actions';

const initialState = {
  snapshots: [],
  isFetchingSnapshot: false
};

function reactPhotoboothApp(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SNAPSHOT:
      return Object.assign({}, state, {
        isFetchingSnapshot: true
      });    
    case CAPTURE_SNAPSHOT:
      return state;   
    case RECEIVE_SNAPSHOT:
      return Object.assign({}, state, {
        snapshots: [...state.snapshots, action.image_data]
      });    
    default:
      return state;
  }
}

export default reactPhotoboothApp;
