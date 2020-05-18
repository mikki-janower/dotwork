$(document).ready(function () {
    $("#project").fadeIn("100");

    //------------------------------------redirect to homepage when .name or .projectTitle are clicked
    $(".name").click(function () {
        $("#project").slideToggle(200);
        $(document)
            .delay(300)
            .queue(function (next) {
                window.location.href = "index.html";
                next();
            });
        return false;
    });

    /* $('.projectTitle').click(function(){
    window.location.href = 'index.html';
      return false;
});
//-------------------------------------------------------------say "back" on hover
$('.projectTitle').mouseover(function(){
        $('.projectTitle').html("Back");
});
$('.projectTitle').mouseout(function(){
    $('.projectTitle').html(title);
}); */
    //-------------------------------------------------------------enlarge image on click

    $("#project img").each(function (index) {
        if ($(this).attr("onclick") != null) {
            if (
                $(this)
                .attr("onclick")
                .indexOf("runThis()") == -1
            ) {
                $(this).click(function () {
                    $(this).attr("onclick");
                    var src = $(this).attr("src");
                    ShowLargeImage(src);
                });
            }
        } else {
            $(this).click(function () {
                var src = $(this).attr("src");
                ShowLargeImage(src);
            });
        }
    });

    function ShowLargeImage(imagePath) {
        $("body").append(
            '<div class="modal-overlay" style="display:none"><div class="modal-img" style="display:none"><img src="' +
            imagePath.replace("small", "large") +
            '" /></div></div>'
        );
        $(".modal-overlay, .modal-img").fadeIn("100");
        //------------------------style the page so menus show despite the overlay---------//
        $("body").css("overflow-y", "hidden");
        $(".top").css({
            "background-color": "transparent",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow": "none"
        });
        $(".top p, a").css({
            transition: ".2s",
            color: "rgba(255,255,255,.4)"
        });
    }

    $("body").on("click", ".modal-overlay", function () {
        $(".modal-overlay, .modal-img").fadeOut("100");
        //------------------------fade out the changes to the menus---------//
        $(".top")
            .delay(300)
            .queue(function (next) {
                $("body").css("overflow-y", "scroll");
                $(".top").css({
                    transition: "0s",
                    "background-color": "white",
                    "-webkit-box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)",
                    "-moz-box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)",
                    "box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)"
                });
                next();
            });
        $(".top p, a").css({
            transition: ".2s",
            color: "black"
        });
    });
});

//------------------------------------------------------------------changes to specific pages
/*$('.top .grid-column-2').mouseover(function(){
    $('.projectTitle').html("Back");
    $('.projectTitle').css({
        'transform': 'rotateY(180deg)',
        'transition': '.2s'
    });
});
$('.projectTitle').mouseout(function(){
$('.projectTitle').html(title);
$('.projectTitle').css("transform", "rotateY(0deg)");
});*/

$("#reconnatest textarea").hover(function () {
    scrollTop: $("#Reconnatest textarea").offset().top;
});

//-----------------------------document closing bracket; don't touch
