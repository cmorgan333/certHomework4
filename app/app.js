function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

MODEL.updateView(pageID)
}

function initListeners() {
    $("#submit").click(function (e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        console.log("inputs " + firstName + " " + lastName + " " + email);
    });

    // $("#create").click(function (e) {
    //     e.preventDefault();
    // })
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    initURLListener();
    initListeners();
});