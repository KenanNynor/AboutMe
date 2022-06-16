$(document).ready(function() {
    // ? On Header-click, open/close the description
    // // todo: make transition

    $("#expand1H").click(function() {
        $("#expand1P").slideToggle(400);
    });

    $("#expand2H").click(function() {
        $("#expand2P").slideToggle(400);
    });

    $("#expand3H").click(function() {
        $("#expand3P").slideToggle(400);
    });

    $("#expand4H").click(function() {
        $("#expand4P").slideToggle(400);
    });

    $("#expand5H").click(function() {
        $("#expand5P").slideToggle(400);
    });

    $("#expand6H").click(function() {
        $("#expand6P").slideToggle(400);
    });

    $("#expand7H").click(function() {
        $("#expand7P").slideToggle(400);
    });

    $("#expand8H").click(function() {
        $("#expand8P").slideToggle(400);
    });

    $("#expand9H").click(function() {
        $("#expand9P").slideToggle(400);
    });

    // ? Dark/White Mode Switch
    // // bug: fix that images get inverted
    // // todo: fix bug

    // todo: make selection invert too
    // ! Perhaps not possible

    $("#switchBtn").click(function() {
        $("html, img").toggleClass("buttonSwitch");
    });

});