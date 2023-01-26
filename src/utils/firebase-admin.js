// import * as admin from 'firebase-admin';
import firebase from 'firebase';
import 'firebase/auth';

// $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
// var serviceAccount = require('./healovo-firebase-adminsdk-ct2ab-9fa4fb5a0a.json');

// admin.initializeApp({
//   //   credential: admin.credential.applicationDefault(),
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://healovo-default-rtdb.firebaseio.com',
//   projectId: 'healovo',
// });

// export const adminCreateUser = (email, password, phone, fullName, image) => {
//   admin
//     .auth()
//     .createUser({
//       email: email,
//       emailVerified: true,
//       phoneNumber: `+20${phone}`,
//       password: password,
//       displayName: fullName,
//       photoURL:
//         'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.2026981598.1617580800',
//       disabled: false,
//     })
//     .then((userRecord) => {
//       console.log('Successfully created new user:', userRecord.uid);
//     })
//     .catch((error) => {
//       console.log('Error creating new user:', error);
//     });
// };

var config = {
  apiKey: 'AIzaSyAvhrEd58Qmg_adFoaLwEjkemym4EKUD3s',
  authDomain: 'healovo.firebaseapp.com',
  databaseURL: 'https://healovo-default-rtdb.firebaseio.com',
  projectId: 'healovo',
};
const adminApp = firebase.initializeApp(config, 'Secondary');
export const adminAuth = adminApp.auth();
