//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCsU56SEMTh50eDSl0FodkyOOCqbSKfCaw",
    authDomain: "fir-comp1800-78820.firebaseapp.com",
    projectId: "fir-comp1800-78820",
    storageBucket: "fir-comp1800-78820.appspot.com",
    messagingSenderId: "335837627420",
    appId: "1:335837627420:web:25cdd92157166041e88bd9",
    measurementId: "G-JDH7B5Z8HV"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();