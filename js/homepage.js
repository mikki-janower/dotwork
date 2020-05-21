$(document).ready(function () {
    
let about = false;

$( ".pic" ).draggable({
    appendTo: 'body',
containment: 'window',
});
let dragFunction;


$(document).delay(150).queue(function (next) {
        $(".pic").css("transform", "rotateY(0deg)");
        isDraggable();
        next();
    });
//----------------------------------decide if homepage is wide enough to make pics draggable
    const isDraggable = function(){
        let w = window.innerWidth;
        if (w > 700){
            dragFunction = true;
            positionRandom();
        } else {
            $( ".pic" ).draggable( "option", "disabled", true );
            dragFunction = false;
        }
    };
 $(window).resize(function(){
       isDraggable();
       if (dragFunction == false){
        $(document).delay(300).queue(function (next) {
            window.location.href = "index.html";
            next();
        });
    }
});


//----------------------------------------------------------------position pics randomly on page load AND on resize 


// collect all the divs
const positionRandom = function(){
    let w = window.innerWidth;
    var divs = document.querySelectorAll('.pic');
    let homepage = $('#homepage');
// get window width and height

var winWidth = window.innerWidth - 250;
var winHeight = window.innerHeight - 250;

//var winWidth = homepage.width();
//var winHeight = homepage.height();


// i stands for "index". you could also call this banana or haircut. it's a variable
    for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    //check for overlap
    
    // update top and left position
    if (w > 700){
        thisDiv.style.top = randomTop +"px";
        thisDiv.style.left = randomLeft +"px";
    } 
    }
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) { 
return Math.random() * (max - min) + min;
} 

positionRandom();

//--------------------------------------------------------------3d effect on pics 
  //--------track mouse position on the page
  document.addEventListener("mousemove", function (event) {
    let w = window.innerWidth;
    const x = event.pageX;
    const y = event.pageY;

    $(".pic").each(function () {
        //-------find the coordinates of each pic individually

        let targetCoords = this.getBoundingClientRect();

        //-------pinpoint the center of each pic individually

        let targetX = targetCoords.left + this.offsetWidth / 2;
        let targetY = targetCoords.top + this.offsetHeight / 2;

        //------change angle for X and Y to turn each pic as the mouse move

        let angleX = (targetY - y) / 20;
        let angleY = (targetX - x) / -20;

        //------transform each pic
        if (w > 700) {
            this.style.transform =
                "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
        } else {
            this.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    }); 
    //---------------------------------end of mousemove function
});


//----------------------format dragTitle in lower right corner of page, when pics are draggable

$('.dragTitle').hover(function() {
    if (dragFunction == true){
        $(".dragTitle").css({
            "background-color": "yellow",
           "-webkit-box-shadow": "0px -1px 4px 4px yellow",
           "-moz-box-shadow": "0px -1px 4px 4px yellow",
           "box-shadow" : "0px -1px 4px 4px yellow"
        });
    }
    });
$('.dragTitle').mouseout(function() {
    $(".dragTitle").css({
        "background-color": "transparent",
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none",
        "box-shadow" : "none"
    });
});

$('.pic').on("dragstart", function( event, ui ) {
    if (dragFunction == true){
        $(".dragTitle").fadeIn("200");
        $(".dragTitle").css({
            "background-color": "yellow",
           "-webkit-box-shadow": "0px -1px 4px 4px yellow",
           "-moz-box-shadow": "0px -1px 4px 4px yellow",
           "box-shadow" : "0px -1px 4px 4px yellow"
        });
    }
    });
$('.pic').on("dragstop", function( event, ui ) {
    if (dragFunction == true){
    $(".dragTitle").css({
        "background-color": "transparent",
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none",
        "box-shadow" : "none"
    });
}
});
        $( ".cyberotica" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Cyberotica");
            $(".dragTitle").click(function (){
                window.location.href = "cyberotica.html";
            });
        }
        });
        
        $( ".postcursor" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Postcursor/Starrynite");
            $(".dragTitle").click(function (){
                window.location.href = "postcursor.html";
            });
        }
        });
        $( ".reconna" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Reconna Typeface");
            $(".dragTitle").click(function (){
                window.location.href = "reconnatypeface.html";
            });
        }
        });
        $( ".majorarcana" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Cocktails of the Major Arcana");
            $(".dragTitle").click(function (){
                window.location.href = "majorarcana.html";
            });
        }
        });
        $( ".reflections" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Reflections on Practice");
            $(".dragTitle").click(function (){
                window.location.href = "reflections.html";
            });
        }
        });
        $( ".discoveryourair" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Nike: Discover Your Air");
            $(".dragTitle").click(function (){
                window.location.href = "discoveryourair.html";
            });
        }
        });
        $( ".soundscapes" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("Found Soundscapes");
            $(".dragTitle").click(function (){
                window.location.href = "foundsoundscapes.html";
            });
        }
        });
        $( ".spiritmolecule" ).on( "dragstart", function( event, ui ) {
            if (dragFunction == true){
            $(".dragTitle").html("The Spirit Molecule");
            $(".dragTitle").click(function (){
                window.location.href = "spiritmolecule.html";
            });
        }
        });

//----------------------------------------------------------------------homepage page turns-----------------------
//----------------------------------------homepage appear
const homepageAppear = function () {
    let w = window.innerWidth;

    $("#homepage").fadeIn("200");
    $(".pic").delay(200).fadeIn("100");

    if (w > 700){
        $(".pic").css("transform", "rotateY(90deg)");
        dragFunction = true;
    } else {
        $(".pic").css("transform", "rotateY(0deg)");
        dragFunction = false;
    }
    }
    homepageAppear();
//-----------------------------------------#about page turn

$(".about").click(function () {
     if (about == false) {
         //---------------hide homepage
         $(".pic").css("transform", "rotateY(90deg)");
         $(".pic").fadeOut("200");
         $("#homepage").fadeOut("300");
         $(".dragTitle").fadeOut("300");

         //---------------show about
         $("#about")
             .delay("200")
             .slideToggle("200");
             $(".about").html("Back");
             about = true;

     } else {
         $("#about").slideToggle("200");
         $(".about").html("About");
         about = false;
         homepageAppear();
     }
});

//------------------------------#index-under-construction page turn
/*$(".index").click(function () {


    if (index == false) {
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(".dragTitle").fadeOut("300");
        $("#homepage").fadeOut("300");

        //---------------hide about
        if (about == true) {
            $("#about").slideToggle("200");
            $(".about").html("About");
            about = false;
        }

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
        homepageAppear();
    }
});*/

//---------------------------------.name homepage turn
$(".name").click(function () {

    //---------------hide about
    if (about == true) {
        $("#about").slideToggle("200");
        $(".about").html("About");
        about = false;
    }
    //---------------bring back homepage
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

return false;
});

//--------------------------------index page turn

$(".index").click(function () {

    //---------------hide index
    if (about == true) {
        $("#about").slideToggle("200");
        $(".about").html("About");
        about = false;
    }
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $("#homepage").fadeOut("300");
    $(".dragTitle").fadeOut("300");

    //---------------page redirect
    $(document).delay(300).queue(function (next) {
        window.location.href = "project-index.html";
        next();
    });

return false;
});

//-------------------------------projects page turn 
//check whether clicking or dragging—(ONLY redirect to link if the user is CLICKING the image, not dragging it)
var $body = $('body');
$body.on('mousedown', function (evt) {
  $body.on('mouseup mousemove', function handler(evt) {
    if (evt.type === 'mouseup') {
      isDragging = false;
    } else {
      isDragging = true;
    }
    $body.off('mouseup mousemove', handler);
  });
});
//-------------------------------projects page turn
$(".cyberotica").click(function () {
    //---------------hide homepage
    if (isDragging ==false){
        $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "cyberotica.html";
            next();
        });
    return false;
    }
    
});

$(".postcursor").click(function () {
    //---------------hide homepage
    if (isDragging ==false){
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "postcursor.html";
            next();
        });
    return false;
    }
});
$(".majorarcana").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "majorarcana.html";
            next();
        });
    return false;
    }
});
$(".reflections").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "reflections.html";
            next();
        });
    return false;
    }
});
$(".spiritmolecule").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "spiritmolecule.html";
            next();
        });
    return false;
    }
});
$(".soundscapes").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "foundsoundscapes.html";
            next();
        });
    return false;
    }
});
$(".discoveryourair").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "discoveryourair.html";
            next();
        });
    return false;
    }
});
$(".reconna").click(function () {
    if (isDragging ==false){
    //---------------hide homepage
    $(".pic").css("transform", "rotateY(90deg)");
    $(".about").css("transform", "rotateY(90deg)");
    $(".pic").fadeOut("200");
    $(document)
        .delay(200)
        .queue(function (next) {
            window.location.href = "reconnatypeface.html";
            next();
        });
    return false;
    }
}); 

//document closing bracket; don't touch 
});