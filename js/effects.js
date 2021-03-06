$(document).ready(function() {
    $("#go-about").on("click", function() {
        $(".aboutMe").velocity("scroll", {
           duration: 500,
           easing: "easeInBack"
        });
    });
    
    $("#go-work").on("click", function() {
        $(".Work").velocity("scroll", {
           duration: 750,
           easing: "easeInBack"
        });
    });
    
    $("#go-contact").on("click", function() {
        $(".Contact").velocity("scroll", {
           duration: 1000,
           easing: "easeInBack"
        });
    });
    
    $(".downIcon").velocity({
        translateY: "10px"
    },{
        loop: true
    }).velocity("reverse");
    
    $("#go-down").on("click", function() {
        $(".aboutMe").velocity("scroll", {
           duration: 1000,
           easing: "easeInBack"
        });
    });
    
    $(".navbar-toggle").on("click", function() {
        if ($(".navHeaderCollapse").attr("aria-expanded") == "true") {
            $(".glyphicon-option-horizontal").velocity({
                rotateZ:"0"},{
                easing: "spring"
            });
        } else {
            $(".glyphicon-option-horizontal").velocity({
                rotateZ:"90deg"},{
                easing: "spring"
            });
        }
    });
});