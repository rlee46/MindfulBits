function read_display_bites() {
    //console.log("inside the function")
    let max = 7;
    let min = 1;

    //get into the right collection
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * ((max + 1) - min) + min);
        console.log(random)
        db.collection("Mindful Bites").doc("Bite" + random)
        .onSnapshot(BiteDoc => {
            console.log(BiteDoc.data().bite);
            document.getElementById("bite" + (i+1)).innerHTML = BiteDoc.data().bite;
            document.getElementById("bite" + (i+1) + "-time").innerHTML = " (Estimated Time: " + BiteDoc.data().mins + " minutes)";
        })
    }
}
read_display_bites();

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