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
    if(wScroll > $('.gallery').offset().top - ($(window).height() / 2.2)){
    $('.gallery figure').each(function(i){   //show each image while scrolling
        setTimeout(function(){              //(i) => means each one
            $('.gallery figure').eq(i).addClass('is-showing');  //eq() => means look at the index and find the right one
        }, 250 * (i + 1));    //set the time interval
        });
    }

    /* Periscope with price */
    if(wScroll > $('.periscope-price').offset().top - $(window).height()){
        var opacity = (wScroll - $('.periscope-price').offset().top + 400) / (wScroll / 5);
        $('.promo-text').css({'opacity': opacity});
    }

    /* Floating section */
    if(wScroll > $('.floating-section').offset().top - $(window).height()){

        var offset = (Math.min(0, wScroll - $('.floating-section').offset().top + $(window).height() - 250));  //Math.min(0) => makes the image stop at the end of div

        // ========
        //var floatTop = $('.floating-section').offset().top;
        //var height = $(window).height();
        //var offset = wScroll - floatTop + height - 250;  //Math.min(0) => makes the image stop at the end of div
        //console.log("floating-section.top: " + floatTop + ", window.height: " + height, ", wScroll: " + wScroll );
        //console.log(offset);
        // ========


        //$('.arrow-left').css({ 'transform' : 'translate('+ offset +'px, 30px)' });             //left and ...
        //$('.arrow-right').css({ 'transform' : 'translate('+ Math.abs(offset) +'px, 30px)' });  // right arrows will fly horisontally

        $('.arrow-left').css({ 'transform' : 'translate('+ offset +'px, ' + Math.abs(offset * 0.6) + 'px)' });             //left and ...
        $('.arrow-right').css({ 'transform' : 'translate('+ Math.abs(offset) +'px, ' + Math.abs(offset * 0.6) + 'px)' });  // right arrows will fly on diagonal
    }
});


