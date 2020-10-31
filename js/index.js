console.log("Welcome to my profile");

let Btn = document.getElementById('btn');
Btn.addEventListener("click", (e) => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(name + " " + email + " " + message);
    console.log("you have clicked the send btn");
    if (name == "" || email == "" || message == "") {
        e.preventDefault();
        alert("Please filled all coloumns");
    } else {

        alert("your message has been sent successfully");
        location.reload();
    }

});