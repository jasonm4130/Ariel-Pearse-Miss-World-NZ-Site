$(function() {
  sponsorsBubbleClick();
});

function sponsorsBubbleClick() {
  $('.sponsor').on('click',function() {
    var $this = $(this),
        sponsorTop = $(this).position().top,
        vertMath = -1 * (sponsorTop - 310);
        sponsorLeft = $this.position().left,
        horizMath = 0 - sponsorLeft;

        if($(window).width() > 640){
          $this.parent().css('top', + vertMath + 'px');
        } else {
          if($this.hasClass('back-btn')) {
            sponsorsNarrowStart();
          } else {
            $this.parent().css('left', + horizMath + 'px');
          }
        }
        if(!$this.hasClass('back-btn')){
        $(this).addClass('has-bubble-open')
          .siblings().removeClass('has-bubble-open');
        }
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
    if($(window).width() > 640) {
    $('.sponsorlist').addClass('launched');
    setTimeout(function(){
      sponsorsWideStart();
    }, 400);
      if(!$('.sponsor').hasClass('has-bubble-open') && !$this.hasClass('back-btn')){
        setTimeout(function(){
            $('.sponsor:nth-child(3)').addClass('has-bubble-open')
        }, 400);
      }
    } else {
      sponsorsNarrowStart();
    }
  }

};

function sponsorsNarrowStart() {
  $('.sponsorlist').css({
    'top': '300px',
    'left': '0px'
  });
  $('.sponsor').first().addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
}

function sponsorsWideStart() {
  $('.sponsorlist').css({
    'top': '0px',
    'left': '0px'
  });
  $('.sponsor:nth-child(3)').addClass('has-bubble-open')
  .siblings().removeClass('has-bubble-open');
}

$(window).resize(function(){
  if($(window).width() > 640){
    sponsorsWideStart();
  } else {
    sponsorsNarrowStart();
  }
});
