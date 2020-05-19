$(document).ready(function () {
    $("#project").fadeIn("100");
      //---------------------------------dot change 
      const dot = (function () {
        const w = window.innerWidth;
        if (w >= 1000) {
            $(".name").html(
                "Mikki Janower<span class='dot'>&nbsp dot &nbsp</span>Work"
            );
        } else if (w >= 700) {
            $(".name").html(
                "Mikki<span class='dot'>&nbsp dot &nbsp</span>Work"
            );
        } else {
            $(".name").html(
                "Mikki"
            ); 
        }
    });
    dot();
    $(window).resize(function() {
        dot();
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
        $("body").css("overflow-y", "hidden");
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
        $(".projectTitle").css("display", "none");
    }

    $("body").on("click", ".modal-overlay", function () {
        let w = window.innerWidth;
        $(".modal-overlay, .modal-img").fadeOut("100");
        //------------------------fade out the changes to the menus---------//
        $(".top")
            .delay(200)
            .queue(function (next) {
                $("body").css("overflow-y", "scroll");
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
                    };

                next();
            });
        $(".top p, a").css({
            transition: ".1s",
            color: "black"
        });
    });
});

//------------------------------------------------------------------changes to specific pages


//-----------------------------document closing bracket; don't touch
