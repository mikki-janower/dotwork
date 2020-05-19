$(document).ready(function () {
    $( ".pic" ).draggable();
    
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


  /*  const homepageAppear = function () {
        let w = window.innerWidth;
        if (w > 700){
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
        } else {
            $(".pic").css("transform", "rotateY(0deg)");
            $(".pic").fadeIn("200");
        }
        $("#homepage").fadeIn("300");
    }*/
    //-----------------------a weird attempt at random positioning
   
// collect all the divs
const positionRandom = function(){
    let w = window.innerWidth;
    var divs = document.querySelectorAll('.pic');
// get window width and height

var winWidth = window.innerWidth - 200;
var winHeight = window.innerHeight - 200;



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
    

/*var divs = document.querySelectorAll('.pic');
var pics = jQuery.makeArray( divs );*/

positionRandom();

//reload homepage function
const reloadHome = function(){
    //---------------bring back homepage
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

    homepageAppear();

return false;
}
const homepageAppear = function () {
let w = window.innerWidth;
if (w > 700){
    $(".pic").css("transform", "rotateY(90deg)");
    $(".pic").fadeIn("200");
} else {
    $(".pic").css("transform", "rotateY(0deg)");
    $(".pic").fadeIn("200");
}
}

const isDraggable = function(){
    let w = window.innerWidth;
    if (w > 700){
        $( ".pic" ).draggable( "option", "disabled", false );
        positionRandom();
        dragFunction = true;
    } else {
        $( ".pic" ).draggable( "option", "disabled", true );
        dragFunction = false;
//reload homepage
    }
};
$( window ).on( "load", function() {
    isDraggable();
});
$(window).resize(function(){
   isDraggable();
   if (dragFunction == false){
    
    reloadHome();
   }
});

    //-----------------------track mouse position on the page
    document.addEventListener("mousemove", function (event) {
        let w = window.innerWidth;
        const x = event.pageX;
        const y = event.pageY;

        $(".pic").each(function () {
            //----------------find the coordinates of each pic individually

            let targetCoords = this.getBoundingClientRect();

            //----------------pinpoint the center of each pic individually

            let targetX = targetCoords.left + this.offsetWidth / 2;
            let targetY = targetCoords.top + this.offsetHeight / 2;

            //-----------change angle for X and Y to turn each pic as the mouse move

            let angleX = (targetY - y) / 6;
            let angleY = (targetX - x) / -6;

            //-----------transform each pic
            if (dragFunction == true) {
                this.style.transform =
                    "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
            } else {
                this.style.transform = "rotateX(0deg) rotateY(0deg)";
            }
        }); 
        //---------------------------------end of mousemove function
    });
    

    //------------------------------------------------------------------to fix media queries
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
    });

    //----------------------------make top and bottom sections sticky
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
    let w = window.innerWidth;
    if (w < 700) {
      //  if($(window).scrollTop() + $(window).height() == $(document).height()) {
        if($(window).scrollTop() + $(window).height() >= $(document).height() - 160) {
            $(".bottom").fadeIn(200); 
        } else {
            $(".bottom").fadeOut(200);  
        } 
    }
});
};

const bottomVisibility = function () {
 let w = window.innerWidth;
 if (w < 700){
    $(".bottom").css("display", "none");
    bottomScrolled();
 } else {
    $(".bottom").css("display", "flex"); 
 }
}
$(window).resize(function() {
    bottomVisibility();
});

bottomVisibility();

//----------------------bring back links


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

 










    //--------------------document closing bracket, don't touch
});
