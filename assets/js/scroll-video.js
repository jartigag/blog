/* original author: vassilis mastorostergios (https://codepen.io/vmasto_1470672674/pen/KyyMwq) */
// https://codepen.io/vmasto_1470672674/pen/KyyMwq
var $window = $(window);
var $videoWrap = $('.video-wrap');
var $video = $('.video');
var $hideVideo = $('.hide-video');
var videoHeight = $video.outerHeight();
var $videoIframe = $('.video-iframe');
var $closeWrap = $('.close-wrap-button');

$closeWrap.on('click', function() {
    $video.removeClass('stuck');
    $videoIframe[0].src = $videoIframe[0].src; /* this forces the pause */
});

$window.on('scroll',  function() {
  var windowScrollTop = $window.scrollTop();
  var videoBottom = videoHeight + $videoWrap.offset().top;
  
  $videoWrap.css("visibility", "visible");
  if (windowScrollTop > videoBottom) {
    $videoWrap.height(videoHeight);
    $video.addClass('stuck');
  } else {
    $videoWrap.height('auto');
    $video.removeClass('stuck');
  }

  var hideVideoTop = $hideVideo.offset().top - 200;
  if (windowScrollTop > hideVideoTop) {
    $videoWrap.css("visibility", "hidden");
  }
});
