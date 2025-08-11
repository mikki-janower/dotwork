$(document).ready(function () {

/*--------------------when the user clicks 'read more,' the 'about' section toggles------------------*/
let more = false;
$('.readmore').click(function(){
  if(jQuery( window ).width() > 850){
      if(more == false){
          $('.more').slideToggle("fast");
          $('.readmore').html("Read less");
          more = true;
      } else {
          $('.more').slideToggle("fast");
          $('.readmore').html("Read more");
          more = false;
      }
  } else {
      window.location.href = "about.html";
  }
});

//-----------------anytime the user clicks on an element with a 'data-link' redirect to the corresponding link------*/
$('[data-link]').on('click', function() {
      let link = $(this).attr('data-link'); 
      if (link) {
        window.location.href = link;
      }
 });

//this array lists all currently active case studies in order. The 'back' and 'next' functions below navigate between its contents.
//manually update this array every time you'd like to add a new case study or change the order of the existing ones. 
const pagelinks = [
    "fossora.html",
    "acuity.html",
    "piratedistro.html",
    "tci.html",
    "tetragrammaton.html",
    "displays.html",
    "legg.io.html",
    "tategames2.html",
    "nytimes.html",
    "venndiagramm.html",
    "community.html",
    "sampler.html",
    "mhns.html",
    "spaceopera.html"
]
//------------------when you press my name, redirect to index page
    $(".name").click(function () {
        $(document).delay(200).queue(function (next) {
           window.location.href = "index.html";
            next();
        });
    });
//-----when you press the 'back' button, go back to previous page
$('.btn-back').on('click', function (e) {
      e.preventDefault(); // Prevent default link/button behavior

      const referrer = document.referrer;
      const currentHost = window.location.host;

      if (referrer && new URL(referrer).host === currentHost) {
        // Redirect directly to the referrer URL to reset scroll
        window.location.href = referrer.split('#')[0]; // remove any hash
      } else {
        // Go to homepage if no referrer or from external site
        window.location.href = '/'; // change to your homepage URL
      }
    });
/*$('.btn-back').click(function(){
    let currentPage = window.location.pathname.substring(1);
    let i = pagelinks.indexOf(currentPage);
    if(i==0){
        window.location.pathname = pagelinks[pagelinks.length - 1];
    } else if(i==pagelinks.length){
        window.location.pathname = pagelinks[0];
    } else {
        window.location.pathname = pagelinks[i-1];
    };
});*/
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
    let poster = el.attr('poster') || '';

    if (!src && !poster) return;

    // Decide media type
    if (el.is('img')) {
      $img.attr('src', src).show();

    } else if (el.is('video')) {
      let videoType = el.attr('type') || '';
      let videoEl = document.createElement('video');

      // If video unsupported or no src, fallback to poster
      if (!src || (videoType && videoEl.canPlayType(videoType) === '')) {
        if (poster) {
          $img.attr('src', poster).show();
        }
      } else {
        $videoSource.attr('src', src);
        $video.get(0).load();
        $video.show();
      }

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

  // Click any media except excluded areas
  $(document).on('click', 'img, video, iframe', function (e) {
    if ($(this).closest('#lightbox, nav, footer, #homepage-main, .no-lightbox').length) return;
    openLightbox($(this));
  });

  // Click overlay or close button
  $('#lightbox').on('click', function (e) {
    if ($(e.target).is('#lightbox, .close, .lightbox-overlay')) {
      closeLightbox();
    }
  });

  // ESC key close
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
/*$(document).ready(function () {
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
});*/

//-----------activate 'querydown', a temporary div that shows browser width. Useful for setting media queries as precisely as possible.
/*    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");
  });*/

//-----------------------------document closing bracket; don't touch
});
