function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("Users").doc(user.uid);
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    console.log(user_Name);
                    //method #1:  insert with html only
                    document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
                    //method #2:  insert using jquery
                    $("name-goes-here").text(user_Name); //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}
insertName();

/*
This function reads from Firebase and populates our "bite" cards.
*/
function readDisplayBites() {
    //get into the right collection
    for (let i = 1; i <= 15; i++) {
        db.collection("Mindful Bites").doc("Bite" + i)
        .onSnapshot(BiteDoc => {
            console.log(BiteDoc.data().bite);
            document.getElementById("bite" + (i)).innerHTML = BiteDoc.data().bite + " <br>";
            document.getElementById("bite" + (i) + "-time").innerHTML = BiteDoc.data().mins + " minutes";
        })
    }
}
readDisplayBites();

/*
This function reads from Firebase and populates our "meditation" cards.
*/
function readDisplayMeditation() {
    //console.log("inside the function")

    //get into the right collection
    for (let i = 1; i <= 12; i++) {
        db.collection("Meditations").doc("Meditation" + i)
        .onSnapshot(MeditationDoc => {
            console.log(MeditationDoc.data().meditation);
            document.getElementById("meditation" + (i)).innerHTML = MeditationDoc.data().technique;
        })
    }
}
readDisplayMeditation();