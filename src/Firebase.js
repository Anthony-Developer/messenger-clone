import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKe9geazQzXuBFppiT7yZtZIjvJD_dF-A",
    authDomain: "messenger-clone-4192f.firebaseapp.com",
    databaseURL: "https://messenger-clone-4192f.firebaseio.com",
    projectId: "messenger-clone-4192f",
    storageBucket: "messenger-clone-4192f.appspot.com",
    messagingSenderId: "711310406164",
    appId: "1:711310406164:web:fa40b0e1f2d8335e276d01",
    measurementId: "G-6NYHG6M69M"
  })

  const db = firebaseApp.firestore()

  export default db