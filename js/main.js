$(document).ready(function(){

  $('.section--parallax').parallax()

  $('.section--current-issue .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  //  lazyLoad: 'ondemand',
  })

  $('.toggle--menu, .toggle--close').on('click', function(){
    $('body').toggleClass('off-canvas-open')

    $('body.off-canvas-open .off-canvas').on('click', function(){
      $('body').removeClass('off-canvas-open')
    })
  })


})

$(window).on('load', function(){

  $('body').removeClass('loading  ')

  $('.section__grid').isotope({
    itemSelector: '.section__grid > .row > .col',
    layoutMode: 'fitRows'
  });

})
