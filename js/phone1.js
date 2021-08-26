$(function(){
          function phone1(){
            $(".phone1 > .mobile1 > ul").stop().animate({marginTop:-490},function(){
              $(".phone1 > .mobile1 > ul > li:first").appendTo(".phone1 > .mobile1 > ul")
              $(".phone1 > .mobile1 > ul").css({marginTop:0})
            })
          }
          setInterval(phone1,2000);
        })