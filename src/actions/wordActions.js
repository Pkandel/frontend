import findWordHelper from 'helpers/wordHelper';
import * as actions from './actionTypes';

export default function findWord (word) {
  return dispatch => {
    dispatch({ type: actions.WORD_FINDER_PENDING });
    findWordHelper(word)
      .then(response => {
        // trying for slow internet speed
        // setTimeout(() => {
        return dispatch({ type: actions.WORD_FINDER_SUCCESS, payload: response.data });
        // }, 2000);
      })
      .catch(error => {
        return dispatch({ type: actions.WORD_FINDER_FAILED, payload: error });
      });
  };
}
