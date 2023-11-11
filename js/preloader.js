(function(){
   window.addEventListener("load",function(e){
       var time = e.timeStamp;
       
       if(time < 1000)
           {
               setTimeout(function()
                    {
                      document.querySelector(".preloader").style.display = 'none';
                    },2000)
           }
       else {
          document.querySelector(".preloader").style.display = 'none'; 
       }
   })
    
})();