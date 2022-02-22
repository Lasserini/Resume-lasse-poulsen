function sendMail(contactForm) {
    emailjs.send("service_emk5e49", "resumePage", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request": contactForm.contactmessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("submit_button").style.color = "#fff";
            document.getElementById("submit_button").style.backgroundColor = "#14921a";
            document.getElementById("submit_button").innerHTML = "SUCCESS!";
            document.getElementById("submit_button").fontWeight = "700";
        },
        function(error) {
            console.log("FAILED", error);
            document.getElementById("submit_button").style.color = "#fff";
            document.getElementById("submit_button").style.backgroundColor = "red";
            document.getElementById("submit_button").innerHTML = "Request Failed, send regular email instead";
            document.getElementById("submit_button").fontWeight = "700";
        }
    );
    return false;  // To prevent loading a new page
}