$(document).ready(function () {
 
//---------------------------------shorten main title accordingly to fit the width of the screen
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
 //--------------------temporary div that shows width—use to fix media queries as precisely as possible
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
    });
//----------------------------------make bottom visible only at the bottom of the page on mobile
const bottomScrolled = function() {
$(window).scroll(function () {
    let w = window.innerWidth;
    if (w < 700) {
        if($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
            $(".bottom").fadeIn(200); 
        } 
    } else {
      $(".bottom").fadeOut(200);  
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

$(window).scroll(function () {
    bottomVisibility();
});

bottomVisibility();



//--------------------document closing bracket, don't touch
});
