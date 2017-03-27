import toastr from 'toastr';
import { push } from 'react-router-redux';
import firebaseApi from '../api/firebase';
import * as types from './actionTypes';
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions';
import { userLoadedSuccess, userCreated, userIsAdminSuccess } from './userActions';

export function authInitializedDone() {
  return {
    type: types.AUTH_INITIALIZATION_DONE,
  };
}

export function authLoggedInSuccess(userUID, userName) {
  return {
    type: types.AUTH_LOGGED_IN_SUCCESS,
    payload: {
      userUID,
      userName,
    },
  };
}

export function authLoggedOutSuccess() {
  return { type: types.AUTH_LOGGED_OUT_SUCCESS };
}

export function authLoggedIn(userUID, userName) {
  return (dispatch) => {
    dispatch(authLoggedInSuccess(userUID, userName));
    dispatch(beginAjaxCall());
    firebaseApi.GetChildAddedByKeyOnce('/users', userUID)
      .then(
        (user) => {
          dispatch(userLoadedSuccess(user.val()));
        })
      .catch(
        (error) => {
          dispatch(beginAjaxCall());
          // @TODO better error handling
          throw (error);
        });
  };
}

export function authInitialized(user) {
  return (dispatch) => {
    dispatch(authInitializedDone());
    if (user) {
      dispatch(authLoggedIn(user.uid, user.displayName));
    } else {
      dispatch(authLoggedOutSuccess());
    }
  };
}

export function assignUserNameToEmail(userName) {
  return dispatch => firebaseApi.assignUserNameToEmailId(userName);
}

export function sendEmailVerification() {
  return dispatch => firebaseApi.sendEmailVerificationLink();
}

export function createUserWithEmailAndPassword(user) {
  const userName = user.username;
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.createUserWithEmailAndPassword(user).then((userData) => {
      dispatch(userCreated(userData));
      dispatch(assignUserNameToEmail(userName));
      dispatch(sendEmailVerification());
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      console.log(error);
      throw (error);
    });
  };
}

export function signOut() {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return firebaseApi.authSignOut()
      .then(
        () => {
          dispatch(authLoggedOutSuccess());
          if (getState().routesPermissions.requireAuth
              .filter(route =>
                route === getState().routing.locationBeforeTransitions.pathname).toString()) {
            dispatch(push('/'));
          }
        })
      .catch((error) => {
        dispatch(ajaxCallError(error));
        // @TODO better error handling
        throw (error);
      });
  };
}

export function signInWithEmailAndPassword(user) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.signInWithEmailAndPassword(user)
      .then(
        (loggedinUser) => {
          if (loggedinUser.emailVerified) {
            dispatch(authLoggedIn(loggedinUser.uid, loggedinUser.displayName));
            dispatch(push('/home'));
          } else {
            dispatch(signOut());
            throw new Error('Please verify your email');
          }
          return loggedinUser;
        })
      .catch((error) => {
        dispatch(ajaxCallError(error));
        // @TODO better error handling
        throw (error);
      });
  };
}

function redirect(replace, pathname, nextPathName, error = false) {
  replace({
    pathname,
    state: { nextPathname: nextPathName },
  });
  if (error) {
    toastr.error(error);
  }
}

export function requireAuth(nextState, replace) {
  return (dispatch, getState) => {
    if (!getState().auth.isLogged) {
      redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
    }
  };
}


export function requireAdmin(nextState, replace, callback) {
  return (dispatch, getState) => {
    if (getState().auth.isLogged) {
      switch (getState().user.isAdmin) {
        default:
        case false:
          redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
          break;
        case undefined:
          firebaseApi.GetChildAddedByKeyOnce('/isAdmin/', getState().auth.currentUserUID)
            .then(
              (user) => {
                if (user.exists() && user.val()) {
                  dispatch(userIsAdminSuccess());
                  callback();
                } else {
                  redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
                }
              })
            .catch(
              (error) => {
                dispatch(ajaxCallError());
                redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
                callback();
                // @TODO better error handling
                throw (error);
              });
          break;
        case true:
          callback();
          break;

      }
    } else {
      redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
      callback();
    }
  };
}
