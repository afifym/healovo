import React, { useState, useEffect, Fragment } from "react";
import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { userIdActions } from "./store/userId";
import { fetchUserByEmail, jsonToArray } from "./setupFirebase";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.user.sendEmailVerification();
        } catch (error) {
          console.log("email error");
        }
      }
      return false;
    },
  },
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("signed out");
    })
    .catch((error) => console.log(error));
};

const Signup = () => {
  //   const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  // console.log("authUser", user?.email); //showing user data

  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        dispatch(authActions.login());
      } else {
        dispatch(authActions.logout());
      }
    });
    return authObserver;
  }, [dispatch]);

  const userData = async () => {
    const signinData = await fetchUserByEmail(user?.email);
    // console.log("signinData", signinData);

    if (signinData) {
      const objectWithKey = jsonToArray(signinData);
      dispatch(userIdActions.updateId(objectWithKey[0].id));

      const userType = objectWithKey[0].type;

      if (userType === "doctor") {
        dispatch(authActions.isDoctor());
      } else {
        dispatch(authActions.isPatient());
      }
    }
  };

  userData();

  if (user) {
    return (
      <Fragment>
        <h3>Welcome {user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={signOut}>Sign out</button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </Fragment>
    );
  }
};

export default Signup;
