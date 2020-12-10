$(document).ready(function(){

  $('.section--parallax').parallax({
    //iosFix: true,
    //androidFix: true,
  })

  $('.section--current-issue .carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          arrows: false,
        }
      }
    ]
  })

  $('.toggle--menu, .toggle--close').on('click', function(){
    $('body').toggleClass('off-canvas-open')

    $('body.off-canvas-open .off-canvas').on('click', function(){
      $('body').removeClass('off-canvas-open')
    })
  })

  checkOffCanvasHeight()

  $(window).on('resize', function(){
    checkOffCanvasHeight()
  })

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 20) {
      $('.brand--logo').addClass('small')
    } else {
      $('.brand--logo').removeClass('small')
    }

  })


})

$(window).on('load', function(){

  $('body').removeClass('loading ')

  $('.section__grid .row ').isotope({
    itemSelector: '.section__grid > .row > .col',
    layoutMode: 'fitRows'
  });

})

function checkOffCanvasHeight() {
  var offCanvasHeight = $('.off-canvas nav').innerHeight() + $('.off-canvas .menu--user').innerHeight() + 20
  if ($(window).height() <= offCanvasHeight) {
    $('.off-canvas').addClass('small')
  }

  if ($(window).height() > (offCanvasHeight + 150)) {
    $('.off-canvas').removeClass('small')
  }
}


console.log("testing new js..")