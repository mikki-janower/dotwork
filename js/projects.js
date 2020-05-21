$(document).ready(function () {
    $("#project").fadeIn("100");
    $(document).delay(200).queue(function (next) {
        $(".projectTitle").css("transform", "rotate(0deg)");
        next();
    });
    //------------------------------------redirect to homepage when .name or .projectTitle are clicked

    const homepageAppear = function () {
        let w = window.innerWidth;
        if (w > 700){
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
        } else {
            $(".pic").css("transform", "rotateY(0deg)");
            $(".pic").fadeIn("200");
        }
        $("#homepage").fadeIn("300");
    }

    $(".name").click(function () {
       $(".projectTitle").css("transform", "rotateY(90deg)");
        $("#project").slideToggle(200);
        $(document)
            .delay(300)
            .queue(function (next) {
                window.location.href = "index.html";
                next();
            });
            homepageAppear();
        
        return false;
    });
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
        $("body").css("overflow", "hidden");
        $(".top").css({
            "background-color": "transparent",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow": "none"
        });
        $(".top p, a").css({
            transition: ".1s",
            color: "rgba(255,255,255,.4)"
        });
        $(".index").css("display", "none");
       // $(".projectTitle").css("display", "none");
        $(".finishedindex").css("display", "none");
        $(".about").css("display", "none");
    }

    $("body").on("click", ".modal-overlay", function () {
        let w = window.innerWidth;
        $(".modal-overlay, .modal-img").fadeOut("100");
        //------------------------fade out the changes to the menus---------//
        $(".top")
            .delay(200)
            .queue(function (next) {
                $("body").css("overflow", "scroll");
                $(".top").css({
                    transition: "0s",
                    "background-color": "white",
                    "-webkit-box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)",
                    "-moz-box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)",
                    "box-shadow": "0px -1px 11px 12px rgba(255,255,255,1)"
                });
                $(".projectTitle").css("display", "flex");
                    if (w > 750){
                        $(".index").css("display", "flex");
                        $(".finishedindex").css("display", "flex");
                    };
                    $(".about").css("display", "flex");
                  //  $(".projectTitle").css("display", "flex");
                next();
            });
        $(".top p, a").css({
            transition: ".1s",
            color: "black"
            });
    });


//------------------------------------------------------------------project page turns--------------
//----------------------------------------project appear
const projectAppear = function () {
    $("#project").delay("300").fadeIn("200");
    }

//------------------------------#index-under-construction page turn
/*let index = false;
$(".index").click(function () {

    if (index == false) {

        //---------------hide project
        $("#project").fadeOut("200");

        //---------------show index section
        $("#index")
            .delay("200")
            .slideToggle("200");
            $(".index").html("Back");
            index = true;

    } else {

        $("#index").slideToggle("200");
        $(".index").html("Index");
        index = false;
        projectAppear();
    }
});*/

//---------------------------------.name homepage turn
$(".name").click(function () {

    //---------------hide index
    if (index == true) {
        $("#index").slideToggle("200");
        $(".index").html("Index");
        index = false;
    }
    //---------------bring back homepage
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

return false;
});

//----------------------------------index page turn
//--------------------------------index page turn

$(".index").click(function () {

    //---------------hide index
    if (about == true) {
        $("#about").slideToggle("200");
        $(".index").html("Index");
        index = false;
    }
    //---------------hide projects
    $("#project").fadeOut("200");

    //---------------page redirect
    $(document).delay(300).queue(function (next) {
        window.location.href = "project-index.html";
        next();
    });

return false;
});


//-----------------------------document closing bracket; don't touch
});