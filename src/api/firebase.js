import * as firebase from 'firebase/firebase-browser';
import { firebaseConfig } from '../config';


class FirebaseApi {

  static initAuth() {
    firebase.initializeApp(firebaseConfig);
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        (user) => {
          unsub();
          resolve(user);
        },
        error => reject(error));
    });
  }

  static assignUserNameToEmailId(userName) {
    return firebase.auth().currentUser.updateProfile({
      displayName: userName,
    });
  }

  static createUserWithEmailAndPassword(user) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }

  static sendEmailVerificationLink() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => true, (error) => {
      console.log(error);
    });
  }

  static signInWithEmailAndPassword(user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  static authSignOut() {
    return firebase.auth().signOut();
  }

  static databasePush(path, value) {
    const newValue = Object.assign({}, value, {
      lastModifiedDtm: firebase.database.ServerValue.TIMESTAMP,
      createdUser: firebase.auth().currentUser.displayName,
    });

    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .push(newValue, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
    });
  }

  static GetValueByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('value');
  }

  static GetAllValues(path) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .once('value');
  }

  static GetChildAddedByKeyOnce(path, key) {
    return firebase
      .database()
      .ref(path)
      .orderByKey()
      .equalTo(key)
      .once('child_added');
  }

  static UpdateAttribute(path, key, attribute, value) {
    return firebase
    .database()
    .ref(`${path}/${key}`)
    .update({
      environments: value,
      lastModifiedDtm: firebase.database.ServerValue.TIMESTAMP,
      lastModifiedUser: firebase.auth().currentUser.displayName,
    });
  }

  static databaseSet(path, value) {
    return firebase
      .database()
      .ref(path)
      .set(value);
  }
}

export default FirebaseApi;
