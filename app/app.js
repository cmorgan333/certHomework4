// function changeRoute() {
//     let hashTag = window.location.hash;
//     let pageID = hashTag.replace("#", "");

// MODEL.updateView(pageID)
// }

// function initURLListener() {
//     $(window).on("hashchange", changeRoute);
//     changeRoute();
// }

function initListeners() {
    $("#create").click(function (e) {
        e.preventDefault();

        let firstName = $("#fName").val();
        let email = $("#email").val();
        let hobby1 = $("#hobby1").val();
        let hobby2 = $("#hobby2").val();
        let hobby3 = $("#hobby3").val();
        let game1 = $("#game1").val();
        let game2 = $("#game2").val();
        let game3 = $("#game3").val();
        let book1 = $("#book1").val();
        let book2 = $("#book2").val();

   console.log("inputs " + firstName + " " + email + " " + hobby1 + " " + hobby2 + " " + hobby3 + 
   " " + " " + game1 + " " + game2 + " " + game3 + " " + book1 + " " + book2);

    });
}




$(document).ready(function() {
    initListeners(); 
});