// browser-update.org detection script
var $buoop = {
    test: false,
    newwindow: true,
    onshow: function(infos) {
        $('.utility-nav').css("margin-top", "25px");
        $('#buorgclose').click(function() {
            $('.utility-nav').css("margin-top", "0px");
        });
    }
};

$buoop.ol = window.onload;

window.onload=function(){
    try {if ($buoop.ol) $buoop.ol();}catch (e) {}
    var e = document.createElement("script");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("src", "//browser-update.org/update.js");
    document.body.appendChild(e);
}