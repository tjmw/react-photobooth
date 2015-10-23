import { captureSnapshotFromVideo } from './utils';

export const REQUEST_SNAPSHOT = 'request-snapshot';
export function requestSnapshot() {
  return {
    type: REQUEST_SNAPSHOT
  }
};

export function captureSnapshot(video) {
  return function(dispatch) {
    dispatch(requestSnapshot());

    let image_data = captureSnapshotFromVideo(video);

    dispatch(receiveSnapshot(image_data));
  }
}

export function initiateCountdown(video) {
  return function(dispatch, getState) {
    let timer;

    timer = setInterval(function() {
      dispatch(decrementCountdown());

      if (getState().get('counter') <= 0) {
        clearTimeout(timer);
        dispatch(resetCountdown());
        dispatch(captureSnapshot(video));
      }
    }, 1000)
  }
}

export const DECREMENT_COUNTDOWN = 'decrement-countdown';
export function decrementCountdown() {
  return {
    type: DECREMENT_COUNTDOWN
  }
}

export const RESET_COUNTDOWN = 'reset-countdown';
export function resetCountdown() {
  return {
    type: RESET_COUNTDOWN
  }
}

export const RECEIVE_SNAPSHOT = 'receive-snapshot';
export function receiveSnapshot(image_data) {
  return {
    type: RECEIVE_SNAPSHOT,
    image_data: image_data
  }
}
