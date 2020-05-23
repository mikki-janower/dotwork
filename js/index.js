$(document).ready(function(){
 $('#fullindex').fadeIn(100);
    
//lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make extender visible on click
var listing = $('.listing');
var extender = $('.extender');

//when a listing is clicked, this function toggles the listing and closes the others.

    $(listing).click(function(){
        //label all extenders "other" except for the selected one
        $(extender).addClass('otherextender');
        $(this).find(extender).removeClass('otherextender');
        
        //get rid of all "other" elements
        $('.otherextender').slideUp(250);

        //toggle the selected element on click as the "other" elements close
        $(this).find(extender).slideToggle(250);
       
        //check the bottom menu, which should fade out as the document height is extended
        });

//-----------------------------------------button hover effect

$('.listing a, .more a').hover(function(){
            $(this).css({
                "background-color": "yellow",
               "-webkit-box-shadow": "0px -1px 5px 5px yellow",
               "-moz-box-shadow": "0px -1px 5px 5px yellow",
               "box-shadow" : "0px -1px 5px 5px yellow"
            });
        });
$('.listing a, .more a').mouseout(function() {
        $(this).css({
            "background-color": "transparent",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow" : "none"
        });
    });
//--------------------------------------------------------------------------------index page turns
//----------------------------------------index appear
let index = true;;
const indexAppear = function () {
    $("#fullindex").delay("200").fadeIn("200");
    $('.indexbottom').fadeOut("200");
    index = true;
    }

//-----------------------------------------#about page turn
let about = false;

$(".about").click(function () {
     if (about == false) {
         //---------------hide index
         $("#fullindex").fadeOut("200");
         $(".back").html("Home");

         //---------------show about
         $("#about")
             .delay("200")
             .slideToggle("200");
             $(".about").html("Back");
             about = true;
             $('.indexbottom').fadeIn("200");

     } else {
         $("#about").slideToggle("200");
         $(".about").html("About");
         about = false;
         $(".back").html("Back");
         indexAppear();
     }
});

//---------------------------------.name homepage turn
$(".name, .back").click(function () {

    //---------------hide index
    if (index == true) {
        $("#fullindex").slideUp("200");
        index = false;
    }
    //---------------bring back homepage
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

return false;
});

//---------------------------closing bracket don't touch bby
});