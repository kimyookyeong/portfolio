  function prev(){
    $('.minibanner li:last').prependTo('.minibanner');
    $('.minibanner').css('margin-left',-200);
    $('.minibanner').stop().animate({marginLeft:0});
  }

  function next(){
    $('.minibanner').stop().animate({marginLeft:-200}, function(){
      $('.minibanner li:first').appendTo('.minibanner');
      $('.minibanner').css({marginLeft:0});
    });
  }

  function slide(){
    $('.minibanner').stop().animate({marginLeft:-200}, function(){
      $('.minibanner li:first').appendTo('.minibanner');
      $('.minibanner').css({marginLeft:0});
    });
  }

  setInterval(slide, 2500);

  $('.i').click(function(){
    prev();
  });

  $('.i').click(function(){
    next();
  });