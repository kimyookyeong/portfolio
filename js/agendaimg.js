$(function(){
          $(".agendaimg").mouseover(function(){ 
            $(".agendaimg img").stop().animate({ marginTop:"-2500px" }, 3000);
          });
          $(".agendaimg").mouseleave(function(){ 
            $(".agendaimg img").stop().animate({ marginTop:0 }, 2000);
          });
        });