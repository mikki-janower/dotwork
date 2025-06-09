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

//-------When you click a listing on the index, redirect to the corresponding project page.
    $('.listing, .new-listing').click(function(){
        window.location.replace($(this).data("link"));
    });

//this array lists all currently active case studies in order. The 'back' and 'next' functions below navigate between its contents.
//manually update this array every time you'd like to add a new case study or change the order of the existing ones. 
const pagelinks = [
    "fossora.html",
    "tategames2.html",
    "tci.html",
    "nytimes.html",
    "venndiagramm.html",
    "tetragrammaton.html",
    "acuity.html",
    "sampler.html",
    "community.html",
    "mhns.html",
    "spaceopera.html",
    "joshualeifer.html",
    "archive.html"
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
  
//---------------------------lazyload fade-in effect
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to fade in any media that's lazy loaded
  function lazyLoadMedia() {
    var lazyElements = document.querySelectorAll('.lozad');
  
    lazyElements.forEach(function (lazyElement) {
      if (isElementInViewport(lazyElement)) {
        if (!lazyElement.classList.contains('loaded')) {
          if (lazyElement.tagName === 'IMG') {
            lazyElement.src = lazyElement.dataset.src;
            lazyElement.onload = function () {
              lazyElement.classList.add('loaded');
            };
          } else if (lazyElement.tagName === 'VIDEO') {
            var sources = lazyElement.querySelectorAll('source');
            sources.forEach(function (source) {
              source.src = source.dataset.src;
            });
            lazyElement.load();
            lazyElement.onloadeddata = function () {
              lazyElement.classList.add('loaded');
            };
          } else {
            // handle other types if needed
          }
        }
      }
    });
  }
  
  // Add event listener to trigger lazy loading on scroll, resize, and orientation change
  window.addEventListener('scroll', lazyLoadMedia);
  window.addEventListener('resize', lazyLoadMedia);
  window.addEventListener('orientationchange', lazyLoadMedia);
  
  // Trigger lazy loading on page load
  window.addEventListener('DOMContentLoaded', lazyLoadMedia);


  //---------------lightbox-------------------//
/*$(document).ready(function() {
    // Auto-apply 'data-type' attribute to all media elements
    $('img').each(function() {
        $(this).attr('data-type', 'image');
    });

    $('video').each(function() {
        $(this).attr('data-type', 'video');
    });

    // Lightbox functionality for images
    $('img').click(function() {
        var src = $(this).attr('src') || $(this).attr('data-src');
        $('#lightbox-video').hide();
        $('#lightbox-source').attr('src', ''); // Clear video source
        $('#lightbox-img').attr('src', src).show();

        $('#lightbox').fadeIn();
    });

    // Lightbox functionality for videos
    $('video').click(function() {
        var src = $(this).find('source').attr('src') || $(this).find('source').attr('data-src');
        $('#lightbox-img').hide();
        $('#lightbox-source').attr('src', src);
        $('#lightbox-video').get(0).load();
        $('#lightbox-video').show();

        $('#lightbox').fadeIn();
    });

    // Close lightbox
    $('.close').click(function() {
  
        $('#lightbox').fadeOut(function() {
            $('#lightbox-img').attr('src', '');
            $('#lightbox-source').attr('src', '');
            $('#lightbox-video').get(0).pause(); // Pause the video when closing
        });
    });

    $('#lightbox').click(function(event) {
        if ($(event.target).is('#lightbox')) {
            $(this).fadeOut(function() {
                $('#lightbox-img').attr('src', '');
                $('#lightbox-source').attr('src', '');
                $('#lightbox-video').get(0).pause(); // Pause the video when closing
            });
        }
    });
});*/

//--------------------------lightbox neue-------------------//
$(document).ready(function () {
  function openLightbox(el) {
    const $lightbox = $('#lightbox');
    const $img = $('#lightbox-img');
    const $video = $('#lightbox-video');
    const $videoSource = $('#lightbox-video-source');
    const $iframe = $('#lightbox-iframe');

    // Reset everything
    $img.hide().attr('src', '');
    $video.hide().get(0).pause();
    $videoSource.attr('src', '');
    $iframe.hide().attr('src', '');

    let src = el.attr('data-src') || el.attr('src') || '';

    if (!src) return;

    // Decide media type
    if (el.is('img')) {
      $img.attr('src', src).show();
    } else if (el.is('video')) {
      $videoSource.attr('src', src);
      $video.get(0).load();
      $video.show();
    } else if (el.data('type') === 'embed' || src.includes('youtube') || src.includes('vimeo')) {
      $iframe.attr('src', src).show();
    }

    $lightbox.fadeIn(200);
  }

  function closeLightbox() {
    $('#lightbox').fadeOut(200, function () {
      $('#lightbox-video').get(0).pause();
      $('#lightbox-iframe').attr('src', '');
    });
  }

  // Trigger: click any .lightbox-trigger element
$(document).on('click', 'img, video, iframe', function (e) {
  // Optional: exclude if inside nav, footer, or already in the lightbox
  if ($(this).closest('#lightbox, nav, footer, .no-lightbox').length) return;

  openLightbox($(this));
});

  // Close on overlay click or "X"
  $('#lightbox .lightbox-overlay, #lightbox .close').on('click', closeLightbox);

  // Close on ESC key
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});


//-----------------------------document closing bracket; don't touch
});
