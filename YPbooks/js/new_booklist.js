  $(function(){

    //multipage
    var i =0;
    $(".booklist>li").mouseenter(function(){
      i = ($(this).index())+1
      $(".new > article").hide()
      $(".new > article:nth-of-type"+"("+i+")").stop().fadeIn()
    })

    // title 
    $(".booklist li").mouseover(function(){
      $(".titlelist").text($(this).text());
    });
  });