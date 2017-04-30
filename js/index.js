// Paarallax header
$(window).scroll(function(){

    var wScroll = $(this).scrollTop(); // this = window. It tells how far it is scrolled from the top

    $('.logo').css({
       'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.siluet').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
    });

    $('.model').css({
        'transform' : 'translate(0px, -'+ wScroll /14 +'%)' //with "-" the object move UP while scrolling
    });

    $('.siluet-content-img').css({
        'transform' : 'translate(0px, '+ wScroll /6 +'%)'
    });

    /* Gallery */
    //if(wScroll > $('.gallery').offset().top) {
    //    $('.gallery img').each(function(){                  //show each image while scrolling
    //
    //        $('.gallery img').addClass('is-showing');
    //    });
    //}

    if(wScroll > $('.gallery').offset().top - ($(window).height() / 1.5)){
    $('.gallery img').each(function(i){               //show each image while scrolling
        setTimeout(function(){                    //(i) => means each one
            $('.gallery img').eq(i).addClass('is-showing');  //eq() => means look at the index and find the right one
        }, 250 * (i + 1));                                             //set rge time interval
    });
}

});
