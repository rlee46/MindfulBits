// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {

        /*
        This function gets the user object from Firebase Authentication database.
        If there's a new user it writes to firestore and creates a new user object.
        After successful login the function redirects to main.html.
        */
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            var user = authResult.user;                           
            if (authResult.additionalUserInfo.isNewUser) {         
                db.collection("Users").doc(user.uid).set({         
                    name: user.displayName,                    
                    email: user.email                         
                }).then(function () {
                    console.log("New user added to firestore");
                    window.location.assign("main.html");       
                })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            document.getElementById('loader').style.display = 'none';
        },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'main.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};
ui.start('#firebaseui-auth-container', uiConfig);