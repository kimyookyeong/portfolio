$(function(){
          $(".likaimg").mouseover(function(){ 
            $(".likaimg img").stop().animate({ marginTop:"-3000px" }, 3000);
          });
          $(".likaimg").mouseleave(function(){ 
            $(".likaimg img").stop().animate({ marginTop:0 }, 2000);
          });
        });