$(function(){
          $(".ypimg").mouseover(function(){ 
            $(".ypimg img").stop().animate({ marginTop:"-1500px" }, 3000);
          });
          $(".ypimg").mouseleave(function(){ 
            $(".ypimg img").stop().animate({ marginTop:0 }, 2000);
          });
        });