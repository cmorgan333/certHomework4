function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

MODEL.updateView(pageID)
}

function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners() {
    $("#create").click(function (e) {
        e.preventDefault();

        let firstName = $("#fName").val();
        console.log("firstName " + firstName);
    });
}

$(document).ready(function() {
    initURLListener();
    initListeners(); 
});