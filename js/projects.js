$(document).ready(function () {

//--------------------start at the top of a page after every page redirect
window.scrollTo(0, 0);

//standardize the site title on every page across the site. 
$(".name").append("mikki.studio");
//---------make the 'about' section of the index slide in after about half a second
$('#about').delay(300).slideToggle(300);

//----------------When you hover on a listing on the index, fade out its label.
   $(".listing").each(function(i){
    $(this).mouseover(function(){
    $(this).find(".title, .description").css({
        opacity: .6
    }); }); 
    $(this).mouseout(function(){
        $(this).find(".title, .description").css("opacity", "1");
    }); });

//-------When you click a listing on the index, redirect to the corresponding project page.
    $('.listing').click(function(){
        window.location.replace($(this).data("link"));
    });
        
//--------------------load project case studies with a subtle fade effect
$("#project").delay("200").fadeIn("100");

//---------------------zoom in on an image when it's clicked
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
                   "background-color": "white"
                });
                next();
            });
        $(".top p, a").css({
            transition: ".2s",
            color: "black"
        });
    });

    //--------------------------------------redirect to index page
    $(".name").click(function () {
        $(document).delay(200).queue(function (next) {
           window.location.href = "index.html";
            next();
        });
    });

    //------------------------Insert footer menu onto every project page
    $(".bottom").append("<a class='flip' href='https://www.instagram.com/_miikki/' target='_blank'>Instagram</a><a class='flip' href='mailto:info@mikki.studio' target='_blank'>Email</a><a class='flip' href='https://www.are.na/mikki-janower' target='_blank'>Are.na</a>");

    //----------- back button automatically redirects to the visitor's last page visited
    $('.backbtn').click(function(){
        history.back();
    });

    //-----------activate 'querydown', a temporary div that shows browser width. Useful for setting media queries as precisely as possible.
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
    });
//-----------------------------document closing bracket; don't touch
});
