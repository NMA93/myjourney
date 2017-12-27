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

/**Scroll**/

