import * as actions from 'actions/actionTypes';
import initialState from './initialState';

export default function wordReducer (state = initialState.word, action) {
  switch (action.type) {
    case actions.WORD_FINDER_PENDING:
      return { ...state, pending: true };
    case actions.WORD_FINDER_SUCCESS:
      return { ...state, word: action.payload, pending: false };
    case actions.WORD_FINDER_FAILED:
      return { ...state, error: action.payload, pending: false };
    default:
      return state;
  }
}
