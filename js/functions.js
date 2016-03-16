$(function() {
  sponsorsBubbleClick();
});

function sponsorsBubbleClick() {
  $('.sponsor').on('click',function() {
    var $this = $(this),
        sponsorTop = $(this).position().top,
        vertMath = -1 * (sponsorTop - 310);

        $this.parent().css('top', + vertMath + 'px');

    $(this).addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open')
  });

}

$(window).scroll(function() {
  postsScroll();
  startSponsors();
})

function postsScroll() {
  var wScroll = $(window).scrollTop();

  $('.post-strip').css('background-position','center -'+ wScroll +'px');

}

function startSponsors () {

  var wScroll = $(window).scrollTop();
  if($('section.sponsors').offset().top - 500 < wScroll) {
    $('.sponsorlist').addClass('launched');
    setTimeout(function(){
        $('.sponsor:nth-child(3)').addClass('has-bubble-open')
    }, 400);
  }

}
