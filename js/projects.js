$(document).ready(function () {

//---------append nav to the #navcontainer section on every page
//$('#navcontainer').append('<div class="name"><h2><a>Mikki Janower</a></h2></div><div class="nav-1"><h2><a href="about.html">About</a><a href="mailto:info@mikki.studio" target="_blank">Contact</a></h2></div> <div class="nav-2"><h2><a href="https://www.instagram.com/_miikki/" target="_blank">Instagram</a><a href="https://www.are.na/mikki-janower" target="_blank">Are.na</a></h2></div>');
$('#navcontainer').append('<div class="name"><h2><a>Mikki Janower</a></h2></div><div class="nav"><h2><a class="client" href="about.html">About</a></h2><h2><a class="client" href="mailto:info@mikki.studio" target="_blank">Contact</a></h2><h2><a class="client" href="https://www.instagram.com/_miikki/" target="_blank">Instagram</a></h2><h2><a href="https://www.are.na/mikki-janower" target="_blank">Are.na</a></h2></div');
//---------append footer to the #projfooter section on every page
//---------append footer to the #projfooter section on every page
$('#projfooter').append('<h2><a class="btn-back flip">Back</a></h2><h2><a class="btn-next flip">Next</a></h2>');

//-----------------anytime the user clicks on an element with a 'data-link' redirect to the corresponding link------*/
$('[data-link]').on('click', function() {
      var link = $(this).attr('data-link');
      if (link) {
        window.location.href = link;
      }
 });
//this array lists all currently active case studies in order. The 'back' and 'next' functions below navigate between its contents.
//manually update this array every time you'd like to add a new case study or change the order of the existing ones. 
const pagelinks = [
    "fossora.html",
    "acuity.html",
    "nytimes.html",
    "displays.html",
    "piratedistro.html",
    "tci.html",
    "community.html",
    "tategames2.html",
    "tetragrammaton.html",
    "sampler.html",
    "venndiagramm.html",
    "mhns.html",
    "legg-dot-io.html"
]
//------------------when you press my name, redirect to index page
    $(".name").click(function () {
        $(document).delay(200).queue(function (next) {
           window.location.href = "index.html";
            next();
        });
    });
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

   //-----------activate 'querydown', a temporary div that shows browser width. Useful for setting media queries as precisely as possible.
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
  });


/*----------------lazyload function and fade-in---------*/
const preloadOffset = 200;
const allMedia = document.querySelectorAll("img, video");
const lazyMedia = document.querySelectorAll(".lozad");

// Add fade-on-scroll to all media
allMedia.forEach(el => el.classList.add("fade-on-scroll"));

// Helper function to check partial visibility
function isPartiallyInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top < windowHeight &&
    rect.bottom > 0 &&
    rect.left < windowWidth &&
    rect.right > 0
  );
}

// Fade in media already in viewport at load
function fadeInVisibleMedia() {
  allMedia.forEach(el => {
    if (isPartiallyInViewport(el)) {
      el.classList.add("fade-in");
      el.classList.remove("fade-on-scroll");
    }
  });
}

// IntersectionObserver to fade in media as they scroll in
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add("fade-in");
      /*el.classList.remove("fade-on-scroll");*/
      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.01,
  rootMargin: "0px 0px -10% 0px"
});

// IntersectionObserver to lazy-load media
const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      if (el.tagName === "IMG" && el.dataset.src) {
        el.src = el.dataset.src;
        el.removeAttribute("data-src");
      } else if (el.tagName === "VIDEO") {
        if (el.dataset.src) {
          el.src = el.dataset.src;
          el.removeAttribute("data-src");
        }
        el.querySelectorAll("source").forEach(source => {
          if (source.dataset.src) {
            source.src = source.dataset.src;
            source.removeAttribute("data-src");
          }
        });
        el.load();
      }

      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.01,
  rootMargin: `0px 0px ${preloadOffset}px 0px`
});

// Apply both observers
allMedia.forEach(el => fadeObserver.observe(el));
lazyMedia.forEach(el => lazyObserver.observe(el));

// Run fade-in logic after window load
window.addEventListener("load", () => {
  fadeInVisibleMedia();
});
//--------------------------lightbox neue--------------------------//
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
  // Optional: exclude if inside nav, footer, main section of homepage, or already in the lightbox
  if ($(this).closest('#lightbox, nav, footer, #homepage-main, .no-lightbox').length) return;

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
