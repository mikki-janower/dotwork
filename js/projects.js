$(document).ready(function () {

//------Initialize lozad lazyload library
lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade')
        }
    }
}).observe()

const observer = lozad(); //lazy loads elements with default selector as ".lozad"
observer.observe();

//--------------------start at the top of a page after every page redirect
window.scrollTo(0, 0);

//---------append nav to the #navcontainer section on every page
$('#navcontainer').append('<div class="name"><h2><a href="https://mikki.studio">Mikki Janower</a></h2></div><div class="nav-1"><h2><a href="about.html">About</a><a href="mailto:info@mikki.studio" target="_blank">Contact</a></h2></div><div class="nav-2"><h2><a href="https://www.instagram.com/_miikki/" target="_blank">Instagram</a><a href="https://www.are.na/mikki-janower" target="_blank">Are.na</a></h2></div>');
//---------append footer to the #projfooter section on every page
$('#projfooter').append('<h2><a class="btn-back flip">Back</a></h2><h2><a class="btn-next flip">Next</a></h2>');
//----------------When you hover on a listing on the index, fade out its label.
   $(".listing").each(function(i){
    $(this).mouseover(function(){
    $(this).find(".info").css({
        opacity: .6
    }); }); 
    $(this).mouseout(function(){
        $(this).find(".info").css("opacity", "1");
    }); });

//-------When you click a listing on the index, redirect to the corresponding project page.
    $('.listing').click(function(){
        window.location.replace($(this).data("link"));
    });

//this array lists all currently active case studies in order. The 'back' and 'next' functions below navigate between its contents.
//manually update this array every time you'd like to add a new case study or change the order of the existing ones. 
const pagelinks = [
    "fossora.html",
    "mhns.html",
    "community.html",
    "leren.html",
    "nytimes.html",
    "spaceopera.html",
    "transientgrounds.html",
    "cyberotica.html",
    "joshualeifer.html",
    "reconnatypeface.html",
    "reflections.html",
    "postcursor.html"
]

//-----when you press the 'back' button, go back one case study 
$('.btn-back').click(function(){
    let currentPage = window.location.pathname.substring(1);
    //------get position (index, or i for short) of the page you're on in the larger array 
    let i = pagelinks.indexOf(currentPage);
    //if you're on the first case study, cycle back to the last one
    if(i==0){
        window.location.pathname = pagelinks[pagelinks.length - 1];
    //if you're on the last case study, cycle back to the first
    } else if(i==pagelinks.length){
        window.location.pathname = pagelinks[0];
    //if you're on any other case study, go back to the last one
    } else {
        window.location.pathname = pagelinks[i-1];
    };
});

//-----when you press the 'next' button, go forward one case study 
$('.btn-next').click(function(){
    let currentPage = window.location.pathname.substring(1);
    //------get position (index, or i for short) of the page you're on in the larger array 
    let i = pagelinks.indexOf(currentPage);
    //if you're on the last case study, cycle back to the first
    if(i==pagelinks.length-1){
        window.location.pathname = pagelinks[0];
    //if you're on any other case study, go back to the last one
    } else {
        window.location.pathname = pagelinks[i+1];
    };
});

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

    //------insert all scripts and into the <head> tag of every page on the site instead of repeating it on each (this lets me batch edit)
    $("head").append('<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">');

    //-----------activate 'querydown', a temporary div that shows browser width. Useful for setting media queries as precisely as possible.
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
    });
// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  //-----------------Lazyload blur-in effect
  // Function to lazy load the images
function lazyLoadImages() {
    var lazyImages = document.querySelectorAll('.lazyload');
  
    lazyImages.forEach(function (lazyImage) {
      if (isElementInViewport(lazyImage)) {
        if (!lazyImage.classList.contains('loaded')) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.onload = function () {
            lazyImage.classList.add('loaded');
          };
        }
      }
    });
  }
  
  // Add event listener to trigger lazy loading on scroll
  window.addEventListener('scroll', lazyLoadImages);
  window.addEventListener('resize', lazyLoadImages);
  window.addEventListener('orientationchange', lazyLoadImages);
  
  // Trigger lazy loading on page load
  window.addEventListener('DOMContentLoaded', lazyLoadImages);

  
//-----------------------------document closing bracket; don't touch
});
