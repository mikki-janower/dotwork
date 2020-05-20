$(document).ready(function(){

//lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make bottom visible only at the bottom of the page on mobile
$(window).scroll(function () {
    let sticky = $(".sticky");
    scroll = $(window).scrollTop();
    
    if (scroll >= 0){
        sticky.css("position", "fixed");
    } else {
        sticky.removeClass("position","fixed");
    } 
});

let about = false;
$('.about').click(function (){
    if (about == false) {
        $(".bottom").delay(300).fadeIn(200); 
        about = true;
    } else {
        $(".bottom").fadeOut(200); 
        about = false
    }
});

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
       bottomScrolled(); 
        });


//---------------------------closing bracket don't touch bby
});