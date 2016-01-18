function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var subject = $("#subject").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                submitMSG(false, text);
            }
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Thank you. I'll get back to you as soon as I can.");
}

function submitMSG(valid, msg) {
    var msgClasses;
    if (valid) {
        msgClasses = "pull-left tada animated text-success";
    } else {
        msgClasses = "pull-left text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});