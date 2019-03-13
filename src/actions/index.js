import { bindActionCreators } from 'redux';
import * as homeActions from './home.actions';
import * as userActions from './user.actions';

export function bindActions(dispatch) {
  return {
    home: bindActionCreators( homeActions, dispatch ),
    user: bindActionCreators( userActions, dispatch ),
  };
}
