function read_display_bite1() {
    //console.log("inside the function")

    //get into the right collection
    db.collection("Mindful Bites").doc("Bite1")
        .onSnapshot(Bite1Doc => {
            console.log(Bite1Doc.data());
            document.getElementById("bite1_goes_here").innerHTML = Bite1Doc.data().Mindful;
        })

}
read_display_bite1();


function read_display_bite2() {
    //console.log("inside the function")

    //get into the right collection
    db.collection("Mindful Bites").doc("Bite2")
        .onSnapshot(Bite2Doc => {
            console.log(Bite2Doc.data());
            document.getElementById("bite2_goes_here").innerHTML = Bite2Doc.data().Mindful;
        })

}
read_display_bite2();

function read_display_bite3() {
    //console.log("inside the function")

    //get into the right collection
    db.collection("Mindful Bites").doc("Bite3")
        .onSnapshot(Bite3Doc => {
            console.log(Bite3Doc.data());
            document.getElementById("bite3_goes_here").innerHTML = Bite3Doc.data().Mindful;
        })

}
read_display_bite3();

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