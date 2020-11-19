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
  });
  