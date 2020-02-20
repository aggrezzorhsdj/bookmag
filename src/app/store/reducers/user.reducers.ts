import {EUserActions, UserActions} from '../actions/user.actions';
import {initialUserState, IUserState} from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.UpdateUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.AuthUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.AuthUserError: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

