$(function(){
          $(".steakimg").mouseover(function(){ 
            $(".steakimg img").stop().animate({ marginTop:"-2000px" }, 3000);
          });
          $(".steakimg").mouseleave(function(){ 
            $(".steakimg img").stop().animate({ marginTop:0 }, 2000);
          });
        });