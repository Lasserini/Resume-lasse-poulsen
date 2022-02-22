function sendMail(contactForm) {
    emailjs.send("service_emk5e49", "resumePage", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request": contactForm.contactmessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To prevent loading a new page
}