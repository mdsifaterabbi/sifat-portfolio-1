$(function(){
   //animation scroll js
var html_body = $('html, body');
$('.navbar-nav .nav-item .nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
}); 
    $('.navbar-brand').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
}); 
    
    //animation scroll js
    $('.banner-button a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});
    //animation scroll js
    $('.banner-blog a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});

    //back2top starts here
    $('.back2top').on('click',function(){
       $('html,body').animate({scrollTop:0},500); 
    });
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.back2top').fadeIn();
        }
        else {$('.back2top').fadeOut();}
    });
    
    
    //animation on scroll with adding an extra class
   $(window).scroll(function(){
	 inViewport();
    });

     $(window).resize(function(){
         inViewport();
     });

     function inViewport(){
         $('.portfolio-image').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('portfolio-image-extra');
             }
         });
         
          $('.portfolio-desc').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('portfolio-desc-extra');
             }
         });
         
         $('.service-1-item').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-1-item-extra');
             }
         });
          
         $('.service-2-item').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-2-item-extra');
             }
         });
         $('.service-3-item').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-3-item-extra');
             }
         });
         $('.service-4-item').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-4-item-extra');
             }
         });
         
         $('.service-item').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-item-extra');
             }
         });
          $('.service-item-two').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('service-item-two-extra');
             }
         });
        
         $('.counter-item-1').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('counter-item-1-extra');
             }
         });
          $('.counter-item-2').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('counter-item-2-extra');
             }
         });
          $('.counter-item-3').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('counter-item-3-extra');
             }
         });
          $('.counter-item-4').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('counter-item-4-extra');
             }
         });
        
          $('.team-member-fadein-1').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('team-member-fadein-1-extra');
             }
         });
         $('.team-member-fadein-2').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('team-member-fadein-2-extra');
             }
         });
         $('.team-member-fadein-3').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('team-member-fadein-3-extra');
             }
         });
         $('.hire-us-1').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('hire-us-1-extra');
             }
         });
         $('.hire-us-2').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('hire-us-2-extra');
             }
         });
         $('.contact-form').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('contact-form-extra');
             }
         }); 
         $('.contact-info').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+800){
                 $(this).addClass('contact-info-extra');
             }
         });
         $('.footer').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('footer-extra');
             }
         });
         $('.back2top').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('back2top-extra');
             }
         }); 
         
         $('.progress-1').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('progress-1-extra');
             }
         });
         $('.progress-2').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('progress-2-extra');
             }
         });
         $('.progress-3').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('progress-3-extra');
             }
         });
         $('.progress-4').each(function(){
             var divPos = $(this).offset().top,
                 topOfWindow = $(window).scrollTop();

             if( divPos < topOfWindow+900){
                 $(this).addClass('progress-4-extra');
             }
         });
         
         
         
         
     }
    
    //menu-bg adding class
    $(window).scroll(function(){
       var scroll2 = $(this).scrollTop();
        if(scroll2 > 100)
            {
                $('.main-menu-section').addClass('menu-bg');
            }
        else{
            $('.main-menu-section').removeClass('menu-bg');
        }
    });
    
    //counter-up js
    $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
    
   //data filtering mixit-up
    var containerEl = document.querySelector('.gal-main');
    var mixer = mixitup(containerEl);
    
    //slick slider
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '.left',
      nextArrow: '.right',
      dots: false,
      fade: true,
      asNavFor: '.slider-img'
    });
    $('.slider-img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true
    });
    
    //venobox starts here
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    $('.venobox_custom').venobox({
        framewidth: '650px',        
        frameheight: '650px',                
        /*titleattr: 'data-title',
        titleBackground: '#fff',
        titlePosition: 'bottom',*/
                  
    });
    
    //auto type code starts here
    $(".typed").typed({
		strings: ["Web Designer.", "Web Developer.", "Android Developer.", "SQL Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		//loopCount: 5,
        loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    /*=====================for color switcher==============================*/
    var colorSheets = [
    {
        color: "#ff8400",
        title: "Switch to Default",
        href: "./css/style.css"
    },
    {
        color: "skyblue",
        title: "Switch to Goldenrod",
        href: "./css/skyblue.css"
    },
    {
        color: "#DAA520",
        title: "Switch to Skyblue",
        href: "./css/goldenrod.css"
    },
    {
        color: "#0B6623",
        title: "Switch to ForestGreen",
        href: "./css/forestgreen.css"
    },    
        
];
    ColorSwitcher.init(colorSheets);
   
    
    /*===========particle js starts here==================*/
    var ctx;
    var cW;
    var cH;

    var raindrops;

    var rainStrength = 2;

    function initCanvas() {
      ctx = document.getElementById("particleCanvas").getContext("2d");

      ctx.canvas.width = 1280 * 0.75; //690
      ctx.canvas.height = 720 * 0.75; //540

      cW = ctx.canvas.width;
      cH = ctx.canvas.height;
    }

    function Raindrops() {
      this.x;
      this.y;
      this.s;
      this.width;
      this.height;

      this.drops = [];
      this.splashes = [];
    }
    Raindrops.prototype.addDrop = function() {
      this.x = Math.random() * (cW + 100) - 100;
      this.y = 0;
      this.s = Math.random() * 7 + 2;

      this.drops.push({
        x: this.x,
        y: this.y,
        velY: 2,
        width: this.s / 3,
        height: this.s * 1.2,
        speed: this.s,
        life: 60
      });
    };
    Raindrops.prototype.render = function() {
      for (var i = 0; i < rainStrength; i++) {
        this.addDrop();
      }

      ctx.save();

      ctx.clearRect(0, 0, cW, cH);

      /*ctx.fillStyle = "rgba(50, 80, 200, 1)";*/
        ctx.fillStyle = "#fff";
      for (var i = 0; i < this.drops.length; i++) {
        var drop = this.drops[i];

        ctx.fillRect(drop.x, drop.y, drop.width, drop.height);
        drop.y += drop.speed * 1;
        drop.x += 2;

        if (drop.y + drop.height > cH) {
          this.splashes.push(drop);

          this.drops.splice(i, 1);
        }
      }

      for (var i = 0; i < this.splashes.length; i++) {
        var splash = this.splashes[i];

        ctx.fillRect(splash.x, splash.y, splash.width / 3, splash.height / 3);

        splash.y -= (splash.velY * splash.speed) / 6;
        splash.life--;
        splash.velY -= 0.1;
        splash.x += 0.15 * splash.speed;

        if (splash.life <= 0) {
          this.splashes.splice(i, 1);
        }
      }

      ctx.restore();
    };

    function init() {
      raindrops = new Raindrops();

      loop();
    }

    function render() {
      raindrops.render();
    }

    function loop() {
      requestAnimationFrame(loop);
      render();
      document.getElementById("status1").innerHTML =
        "Particle Count: " + (raindrops.drops.length + raindrops.splashes.length);
    }

    window.addEventListener("load", function() {
      initCanvas();
      init();
    });

    /*particle js 1 ends here*/
    
    
    /*================particle js 2 starts here=====================*/
        function Animation() {
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      var particles = [];
      var clouds = [];

      var particleCount = 700;
      var cloudCount = 150;

      var mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };

      var gradient;

      var Cloud = function() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height * 0.3);
        this.vx = Math.random() - (Math.random() / .75);
        this.vy = Math.random() - (Math.random() / .75);
        this.radius = (Math.random() * 60) + 30;
        this.animate = function() {
          this.x += this.vx;
          this.y += this.vy;
         };
        this.attract = function(mouseX, mouseY) {
            var dx = this.x - mouseX;
            var dy = this.y - mouseY;
            var distance = Math.sqrt((dx * dx) + (dy * dy));
            this.x -= (dx - 30) / distance;
            this.y -= (dy - 30) / distance;
          };
        this.draw = function() {
          gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
          gradient.addColorStop(0, 'rgba(180, 200, 255, 0.25');
          gradient.addColorStop(1, 'rgba(180, 200, 255, 0)');
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }; 
      } // End Cloud constructor

      // Create and add particles to an array
      for (i = 0; i < cloudCount; i++) {
        clouds.push(new Cloud());
      }

      // Particle constructor
      var Particle = function() {
          this.x = Math.floor(Math.random() * canvas.width);
          this.y = Math.floor(Math.random() * canvas.height);
          this.vx = Math.random() - (Math.random() / .75);
          this.vy = Math.random() - (Math.random() / .75);
          this.radius = Math.random() * 2;
          this.draw = function() {
            ctx.beginPath();
            // ctx.fillStyle = 'rgba(10, 200, 255, .75)';
            ctx.fillStyle = 'rgba(180, 200, 255, .95)';
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
          };
          this.animate = function() {
            this.x += this.vx;
            this.y += this.vy;
          };
          this.attract = function(mouseX, mouseY) {
            var dx = this.x - mouseX;
            var dy = this.y - mouseY;
            var distance = Math.sqrt((dx * dx) + (dy * dy));
            this.x -= (dx - 30) / distance;
            this.y -= (dy - 30) / distance;
          };
          this.explode = function() {
            this.x = Math.floor(Math.random() * canvas.width);
            this.y = Math.floor(Math.random() * canvas.height);
          };
        } // End Particle constructor

      // Create and add particles to an array
      for (i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      this.initialize = function() {
        this.render();
      };

      this.clearCanvas = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        /*ctx.fillStyle = 'rgba(20, 20, 20, 1)';*/
          ctx.fillStyle = 'rgba(0, 0, 0, 0.51)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      this.render = function() {
        this.clearCanvas();
        particles.forEach(function(particle) {
          particle.draw();
          particle.animate();
          particle.attract(mouse.x, mouse.y);

          // Define boundaries
          if (particle.y + particle.vy > canvas.height || particle.y + particle.vy < 0) {
            particle.vy = -particle.vy;
          }
          if (particle.x + particle.vx > canvas.width || particle.x + particle.vx < 0) {
            particle.vx = -particle.vx;
          }
        }); // End particle.forEach loop


        clouds.forEach(function(cloud) {
          // cloud.draw();
          // cloud.animate();
          // cloud.attract(mouse.x, mouse.y);

          // Define boundaries
          if (cloud.y + cloud.vy > canvas.height || cloud.y + cloud.vy < 0) {
            cloud.vy = -cloud.vy;
          }
          if (cloud.x + cloud.vx > canvas.width || cloud.x + cloud.vx < 0) {
            cloud.vx = -cloud.vx;
          }
        });


        window.requestAnimationFrame(this.render);
      }.bind(this)


      this.onMouseMove = function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      canvas.addEventListener('mousemove', this.onMouseMove);
      canvas.addEventListener('click', function(e) {
        console.log();
      });
      // window.requestAnimationFrame(this.render);


    }


    var animation = new Animation();
    animation.initialize();


    // var maxSpeed = .5;
    // var maxDistance = 300;
    // var angle = Math.atan2(dy, dx);
    // this.x -= maxSpeed * ((dx/distance));
    // this.y -= maxSpeed * ((dy/distance));
    // this.y -= dy * (2/(distance * .5));
    
    /*================particle js 2 ends here========================*/
    
    
    
    
    
});