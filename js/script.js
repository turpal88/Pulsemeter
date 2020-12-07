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

$('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order').fadeOut();
});

$('.button_catalog').each(function(i){
    $(this).on('click', function(){
        $('#order .modal__descr').text($('.subtitle_catalog').eq(i).text());
        $('.overlay, #order').fadeIn();
    });
    
});
function formValidate(item){
    $(item).validate({
        rules:{
            name:{
                required: true,
                minlength: 2
                
            },
            phone:{
               required: true
                    
            },
            email:{
               required: true,
               email: true 
            }
    
        },
        messages:{
            name: {
                minlength: jQuery.validator.format("Вы должны ввести минимум {0} символа"),
                required: "Введите ваше имя" 
            },
            email:{
                email: "Ваш email должен быть в формате name@domain.com",
                required: "Введите ваш Email"
            },
            phone:{
                
                required: "Введите ваш телефон"
            }
        }
    });
};
formValidate('.consultation .feed-form');
formValidate('#consultation .feed-form_modal');
formValidate('#order .feed-form_modal');
$('input[name=phone]').mask("+7(999) 999-9999");
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});
$(window).scroll(function(){
    if($(this).scrollTop()>1600){
        $('.pageup').fadeIn();
    }else{
        $('.pageup').fadeOut();
    }
});
$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top},1000);
    return false;
});

});


