$(document).ready(function () {
   $("#project").fadeIn("100");
    $(document).delay(200).queue(function (next) {
        //$(".projectTitle").css("transform", "rotate(0deg)");
        $(".projectTitle").css("opacity", "1");
        //$(".index").css("transform", "rotate(0deg)");
        next();
    });

    //------------------------------------redirect to homepage when .name or .projectTitle are clicked
    $(".name, .index").click(function () {
      // $(".projectTitle").css("transform", "rotateY(90deg)");
      // $(".index").css("transform", "rotateY(90deg)");
        $("#project").slideToggle(200);
        $(document)
            .delay(300)
            .queue(function (next) {
                window.location.href = "index.html";
                next();
            });
        
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
                   // "background-color": "#f2f2f2",
                   "background-color": "white"
                  /* "-webkit-box-shadow": "0px -1px 10px 11px #f2f2f2",
                    "-moz-box-shadow": "0px -1px 10px 11px #f2f2f2",
                    "box-shadow": "0px -1px 10px 11px #f2f2f2"*/
                });
                next();
            });
        $(".top p, a").css({
            transition: ".2s",
            color: "black"
        });
    });
});

//--------------------------------index page turn

$(".index").click(function () {

    //---------------hide about
    /*if (about == true) {
        $("#about").slideToggle("200");
        $(".index").html("Index");
        index = false;
    }*/
    //---------------hide projects
    $("#project").fadeOut("200");

    //---------------page redirect
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });
});

//----------------insert menu onto every page
/*$( "#projfooter" ).insertAfter( $( ".bottom sticky" ) );


var $bottomsticky = $( "<section class='bottom sticky'></section>" ),
  newdiv2 = document.createElement( "div" ),
  existingdiv1 = document.getElementById( "foo" );
 
$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );*/


/*$('.projectTitle').mouseout(function(){
$('.projectTitle').html(title);
$('.projectTitle').css("transform", "rotateY(0deg)");
});*/

/*$("#reconnatest textarea").hover(function () {
    scrollTop: $("#Reconnatest textarea").offset().top;
});*/

//-----------------------------document closing bracket; don't touch
