function sponsorsBubbleClick() {
    $(".sponsor").on("click", function() {
        var s = $(this), o = $(this).position().top, n = -1 * (o - 310);
        sponsorLeft = s.position().left, horizMath = 0 - sponsorLeft, $(window).width() > 640 ? s.parent().css("top", +n + "px") : s.hasClass("back-btn") ? sponsorsNarrowStart() : s.parent().css("left", +horizMath + "px"), 
        s.hasClass("back-btn") || $(this).addClass("has-bubble-open").siblings().removeClass("has-bubble-open");
    });
}

function postsScroll() {
    var s = $(window).scrollTop();
    $(".post-strip").css("background-position", "center -" + s + "px");
}

function startSponsors() {
    var s = $(window).scrollTop();
    $("section.sponsors").offset().top - 500 < s && ($(window).width() > 640 ? ($(".sponsorlist").addClass("launched"), 
    setTimeout(function() {
        sponsorsWideStart();
    }, 400), $(".sponsor").hasClass("has-bubble-open") || $this.hasClass("back-btn") || setTimeout(function() {
        $(".sponsor:nth-child(3)").addClass("has-bubble-open");
    }, 400)) : sponsorsNarrowStart());
}

function sponsorsNarrowStart() {
    $(".sponsorlist").css({
        top: "300px",
        left: "0px"
    }), $(".sponsor").first().addClass("has-bubble-open").siblings().removeClass("has-bubble-open");
}

function sponsorsWideStart() {
    $(".sponsorlist").css({
        top: "0px",
        left: "0px"
    }), $(".sponsor:nth-child(3)").addClass("has-bubble-open").siblings().removeClass("has-bubble-open");
}

$(function() {
    sponsorsBubbleClick();
}), $(window).scroll(function() {
    postsScroll(), startSponsors();
}), $(window).resize(function() {
    $(window).width() > 640 ? sponsorsWideStart() : sponsorsNarrowStart();
});
