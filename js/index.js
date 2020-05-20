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
    }else {
        sticky.removeClass("position","fixed");
    } 
});

const bottomScrolled = function() {
$(window).scroll(function () {
      //  if($(window).scrollTop() + $(window).height() == $(document).height()) {
        if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            $(".bottom").fadeIn(200); 
        } else {
            $(".bottom").fadeOut(200);  
        } 
});
};

const bottomVisibility = function () {
    bottomScrolled();
}
$(window).resize(function() {
    bottomVisibility();
});

bottomVisibility();

//----------------------------make extender visible on click
var extended = false;
var listing = $('.listing');
var extender = $('.extender');

jQuery.each(listing, function(){
    $(this).click(function(){
        if (extended == false){
            $(extender).slideToggle(300);
            $(this).css({
                "padding-bottom":"326px"
        });
        extended = true;

        } else {
             $(extender).slideToggle(300);
            $(this).css({
                "padding-bottom":"16px"
            });
            extended = false;
        }
        bottomVisibility(); 
    });
});





//---------------------------closing bracket don't touch bby
});