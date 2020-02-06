
function sendJoinMail(contactForm) {
    var template_params = {
        "name": contactForm.name.value,
        "email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "message": contactForm.why.value
    }
    var service_id = "iowapen"; //default_service
    var template_id = "template_stvF9WuB";
    
    //emailjs.send(service_id, template_id, template_params);
    emailjs.send(service_id, template_id, template_params )
    .then(
        function(response) {
            console.log("SUCCESS", response);
            //Clear form on success
            //document. getElementById("joinform"). reset();
            // document.contactForm.reset();
            contactForm.reset();
            alert("Your membership request has been sent!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Your membership request could not be sent at this time; please try again later.");
        }
    );

    return false;  // To block from loading a new page
}