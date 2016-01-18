$(document).ready(function() {
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            submitMSG(false, "Did you fill the form properly?");
        } else {
            event.preventDefault();
            submitForm();
            formSuccess();
        }
    });
});

function submitMSG(valid, msg) {
    var msgClasses;
    if (valid) {
        msgClasses = "pull-left rubberBand animated";
    } else {
        msgClasses = "pull-left text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Thank you. I'll keep in touch.");
}

function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var subject = $("#subject").val();

    $.ajax({
        url: "//formspree.io/pragaashp@berkeley.edu",
        method: "POST",
        data: {name: name, email: email, subject: subject, message: message},
        dataType: "json"
    });
}