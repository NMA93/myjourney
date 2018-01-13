/**Scrolify**/

$(document).foundation()

$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });


/**Fade**/

$(window).scroll(function() {

    if ($(this).scrollTop()>850)
     {
        $('.fade').fadeOut();
     }
    else
     {
      $('.fade').fadeIn();
     }
 });


/**Transition**/

$(function(){
$('.trans-left').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
   var $el = $(this);
   $el.addClass('in')
   },
   doOut: function() {
   var $el = $(this);
   $el.removeClass('in')
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   debug: false
});
    
    $('.trans-right').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
   var $el = $(this);
   $el.addClass('in')
   },
   doOut: function() {
   var $el = $(this);
   $el.removeClass('in')
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   debug: false
});
    });
    

