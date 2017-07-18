/*
$lg.lightGallery();
  $lg.append(slide);
  $lg.data('lightGallery').destroy(true);
  $lg.lightGallery();

*/

// external js: isotope.pkgd.js

// init Isotope
$('.grid').isotope({
// options
itemSelector: '.grid-item',
 percentPosition: true,
 masonry: {
 fitWidth: true
  }
  });

 $('a').on( 'click', function() {
 var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  });
