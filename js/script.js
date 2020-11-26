$(document).ready(function(){
    
$('.carousel__inner').slick({

adaptiveHeight: true,
speed: 600,
prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="arrow"></button>',
nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="arrow"></button>',
responsive: [
    {
        breakpoint: 575,
        settings: {
        arrows: false,
        dots: true
    }
    }
    
]
       
        
    });

$('ul.catalog-tabs').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

function switchClass(item){
    $(item).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.item__main-content').eq(i).toggleClass('item__main-content_active');
            $('.catalog__addition').eq(i).toggleClass('catalog__addition_active');
        });
    });
}
switchClass('.catalog-item__link');
switchClass('.catalog-item__back');

});


