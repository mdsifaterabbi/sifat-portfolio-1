$(function(){
    //back2top-forestGreen starts here
    $('.back2top-goldenRod').on('click',function(){
       $('html,body').animate({scrollTop:0},1000); 
    });
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.back2top-goldenRod').fadeIn();
        }
        else {$('.back2top-goldenRod').fadeOut();}
    });
    
    
    //animation on scroll with adding an extra class
   $(window).scroll(function(){
	 inViewport();
    });

     $(window).resize(function(){
         inViewport();
     });

     function inViewport(){
         $('.back2top-goldenRod').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('back2top-goldenRod-extra');
             }
         }); 
            
     } 
    
    //menu-bg-blog-skyblue adding class
    $(window).scroll(function(){
       var scroll2 = $(this).scrollTop();
        if(scroll2 > 100)
            {
                $('.main-menu-section').addClass('menu-bg-blog-goldenRod');
            }
        else{
            $('.main-menu-section').removeClass('menu-bg-blog-goldenRod');
        }
    });
    
    
    
    
});