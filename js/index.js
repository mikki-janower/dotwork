//-----on this doc: toggling the index, page turns
$(document).ready(function(){

let extender= $('.extender');

 $('#fullindex').fadeIn(200);



 let index = true;


if (window.innerWidth > 200) {
    //function to get every listing to open up sequentially, .3s apart
    //$('#about').delay(300).slideToggle(300);
    $('.extender').each(function (i) {
     // store the item around for use in the 'timeout' function
    var $item = $(this); 
    // execute this function sometime later:
    setTimeout(function() { 
    $item.delay(600).slideToggle(300)}, 20*i);
    // each element should animate half a second after the last one.
    });
    }
/*if (window.innerWidth > 750) { */
     $('#about').delay(300).slideToggle(300);
/*}*/

//--------highlight title, description, and year when you hover over a listing
$(".listing").each(function(i){
     $(this).mouseover(function(){
       $(this).find(".title, .description").css({
           opacity: .6
    });
   /* $(this).css({
        'background-color': 'rgba(0,0,0,.025)'
 });*/
     }); 
     $(this).mouseout(function(){
        //$(this).find(".title, .description, .year").css("background-color", "transparent");
        $(this).find(".title, .description").css("opacity", "1");
       /* $(this).css("background-color", "white");*/
     }); 
});

   
//When you click a listing on the index, redirect to the corresponding project page.
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



//----------Toggle 'about' section

$(".about").click(function () {
    //---------------show about
    $("#about").slideToggle(250);


});

//--------When '.name' div is clicked, redirect to homepage
$(".name").click(function () {

    //---------------first, hide the index
    if (index == true) {
        $("#fullindex").slideUp("200");
        index = false;
    }
    //---------------then, reload it 
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

return false;
});


//------everything else on this doc is obsolete save for the document closing bracket.

/*if (window.innerWidth > 700) {
$('#about').delay(300).slideToggle(300);
$('.extender').each(function (i) {
var $item = $(this); 
setTimeout(function() { 
$item.delay(550).slideToggle(300)}, 20*i);
});
}*/


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
/*var image = $('img');
image.addClass(lozad);
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();*/

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


/*$('.listing:not(.firstfeature)').mouseenter(function(){
   if ($('.listing:not(.firstfeature):hover').length > .5){
        $(this).find(extender).slideDown(150);
    }
}).mouseleave(function(){
    $(this).find(extender).slideUp(150);
});*/


//--------------------------------------------------------------------------------index page turns

  /*  $('html,body').animate({
        scrollTop: $("#about").offset().top 
     }); */




//---------------------------closing bracket don't touch bby
});