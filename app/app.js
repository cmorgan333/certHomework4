function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

MODEL.updateView(pageID)
}



function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners() {
    $("#submit").click(function (e) {
        e.preventDefault();
        console.log("hi");
    });
}

$(document).ready(function() {
    initURLListener();
    initListeners();
    
});