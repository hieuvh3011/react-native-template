import {CHANGE_LANGUAGE} from './ActionsType';

export function changeLanguage(language) {
  return (dispatch) => {
    dispatch({type: CHANGE_LANGUAGE, language});
  };
}
