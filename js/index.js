$(document).ready(function(){

let listing = $('.listing');
let extender= $('.extender');

 $('#fullindex').fadeIn(200);



 let index = true;

if (window.innerWidth > 700) {
//function to get every listing to open up sequentially, .3s apart
$('#about').delay(400).slideToggle(250);
$('.extender').each(function (i) {
 // store the item around for use in the 'timeout' function
var $item = $(this); 
// execute this function sometime later:
setTimeout(function() { 
$item.delay(700).slideToggle(250)}, 20*i);
// each element should animate half a second after the last one.
});

} else {
    $('.firstfeature').find(extender).delay(400).slideToggle(350);
}
//-----------------------append projpage
/*$('.extender').append('<div class="projpage">Read more...</div>');*/


//clicking the index button makes the index into a list
/* $('.list').click(function(){
    $('.extender').each(function (i) {
 // store the item around for use in the 'timeout' function
var $item = $(this); 
// execute this function sometime later:
setTimeout(function() { 
$item.slideToggle(250)}, 150*i);
});
});*/
    
//----------------lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make extender visible on click


/* $(listing).click(function(){
    //label all extenders "other" except for the selected one
    $(extender).removeClass('thisextender').addClass('otherextender');
    $(listing).removeClass('thislisting');
    $(this).find(extender).removeClass('otherextender').addClass('thisextender');

    //get rid of all "other" elements
  //  $('.otherextender').slideUp(250);
    //toggle selected element
    $('.thisextender').slideToggle(250);
}); */

//go to case study / link when you click a listing on the index
$('.listing').click(function(){
    let thisextender = $(this).find(extender);
    let dataLink = $(thisextender).data("link");
    if (dataLink == "0"){
    } else if ($(thisextender).data("target") == "_blank") {
        window.open(dataLink);
    } else {
        window.location.href = dataLink;
    }
}); 


/*$('.listing:not(.firstfeature)').mouseenter(function(){
   if ($('.listing:not(.firstfeature):hover').length > .5){
        $(this).find(extender).slideDown(150);
    }
}).mouseleave(function(){
    $(this).find(extender).slideUp(150);
});*/


//--------------------------------------------------------------------------------index page turns
//----------------------------------------about

$(".about").click(function () {
        //---------------show about
        $("#about").slideToggle(250);



  /*  $('html,body').animate({
        scrollTop: $("#about").offset().top 
     }); */
});

//---------------------------------.name homepage turn
$(".name").click(function () {

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