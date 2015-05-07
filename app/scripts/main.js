$(document).ready(function() {

  var options = {
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    scrollSource: null,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1

  };
  var frame = new Sly('.frame', options).init();

  // init controller
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: ".hero-giftright",
    triggerHook: "onLeave",
    duration: $(window).height()*1.5
  })
  .setTween(TweenMax.fromTo(
    ".hero-giftright .hero-bg", 1,
    { y: 0, z: 0.1 },
    { y: "30%", z: 0.1 }
  ))
  .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: ".hero-nevermiss",
    triggerHook: "onEnter",
    duration: $(window).height()*1.5
  })
  .setTween(TweenMax.fromTo(
    ".hero-nevermiss .hero-bg", 1,
    { y: "-25%", z: 0.1 },
    { y: "10%", z: 0.1 }
  ))
  .addTo(controller);


  new ScrollMagic.Scene({
    triggerElement: ".hero-deserveit",
    triggerHook: "onEnter",
    duration: $(window).height()*1.5
  })
  .setTween(TweenMax.fromTo(
    ".hero-deserveit .hero-bg", 1,
    { y: "-25%", z: 0.1 },
    { y: "10%", z: 0.1 }
  ))
  .addTo(controller);



  new ScrollMagic.Scene({
    triggerElement: ".hero-dothis",
    triggerHook: "onEnter",
    duration: $(window).height()*1.5
  })
  .setTween(TweenMax.fromTo(
    ".hero-dothis .hero-bg", 1,
    { y: "-25%", z: 0.1 },
    { y: "10%", z: 0.1 }
  ))
  .addTo(controller);


  $(window).on("scroll", function() {
    if($(window).scrollTop()>1) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });

});