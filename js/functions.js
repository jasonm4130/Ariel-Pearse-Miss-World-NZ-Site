//$(function(){});

$(window).scroll(function(){
  postsScroll();
})

function postsScroll() {
  var wScroll = $(window).scrollTop();

  console.log(wScroll);

  $('.post-strip').css('background-position','center -'+ wScroll +'px');


}
