import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";

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
  console.log(user); //showing user data

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

  if (user) {
    return (
      <>
        <h3>Welcome {user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={signOut}>Sign out</button>
      </>
    );
  } else {
    return (
      <>
        <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </>
    );
  }
};

export default Signup;
