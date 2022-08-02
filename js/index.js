//-----on this doc: toggling the index, page turns
$(document).ready(function(){

let extender= $('.extender');

 $('#fullindex').fadeIn(200);



 let index = true;

//make the 'about' section slide toggle in after about half a second
    $('#about').delay(400).slideToggle(300);
     

//--------highlight title, description, and year when you hover over a listing
$(".listing").each(function(i){
     $(this).mouseover(function(){
       $(this).find(".title, .description").css({
           opacity: .6
    });
     }); 
     $(this).mouseout(function(){
        $(this).find(".title, .description").css("opacity", "1");
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

//---------------------------closing bracket don't touch bby
});