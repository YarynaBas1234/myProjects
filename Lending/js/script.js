jQuery(document).ready(function($){
    benefitsMore = $('.benefits__more');
    benefitsOpen = $('.benefits__open');
    benefitsClose = $('.benefits__close');

    benefitsOpen.on('click', function(){
        $(this).hide();
        benefitsClose.show();
        benefitsClose.css('display', 'inline-block');
        benefitsMore.slideToggle();
    })

    benefitsClose.on('click', function(){
        $(this).hide();
        benefitsOpen.show();
        benefitsMore.slideToggle();
    })
})