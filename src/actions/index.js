import { bindActionCreators } from 'redux';
import * as homeActions from './home';
import * as userActions from './home';

export function bindActions(dispatch) {
  return {
    home: bindActionCreators( homeActions, dispatch ),
    user: bindActionCreators( userActions, dispatch ),
  };
}
