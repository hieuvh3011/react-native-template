import {CHANGE_LANGUAGE} from '../actions/ActionTypes';

const initialState = {
  language: 'en',
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const {language} = action;
      return Object.assign({}, state, {language});
    default:
      return state;
  }
}
