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
    if (valid) {
        $("#confirmMsg").removeClass().addClass("text-center rubberBand animated").text(msg);
    } else {
        $("#msgSubmit").removeClass().addClass("pull-left text-danger").text(msg);
    }
}

function formSuccess() {
    $("#contactForm")[0].reset();
    $("#contactForm").fadeOut("fast");
    submitMSG(true, "Thank you. I'll keep in touch. Cheers.");
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