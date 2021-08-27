function prev(){
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left',-1260);
        $('.slide').stop().animate({marginLeft:0});
      }

      function next(){
        $('.slide').stop().animate({marginLeft:-1260}, function(){
          $('.slide li:first').appendTo('.slide');
          $('.slide').css({marginLeft:0});
        });
      }

      function slide(){
        $('.slide').stop().animate({marginLeft:-1260}, function(){
          $('.slide li:first').appendTo('.slide');
          $('.slide').css({marginLeft:0});
        });
      }

      setInterval(slide, 2000);

      $('.prev').click(function(){
        prev();
      });

      $('.next').click(function(){
        next();
      });