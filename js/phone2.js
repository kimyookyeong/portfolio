$(function(){
          function phone2(){
            $(".phone2 > .mobile2 > ul").stop().animate({marginTop:-490},function(){
              $(".phone2 > .mobile2 > ul > li:first").appendTo(".phone2 > .mobile2 > ul")
              $(".phone2 > .mobile2 > ul").css({marginTop:0})
            })
          }
          setInterval(phone2,2000);
        })