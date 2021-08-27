  $.ajax({
    method:"GET",
    url:"https://dapi.kakao.com/v3/search/book?target=title",
    data:{query:"매일"},
    headers:{Authorization:"KakaoAK bbc285d4e573b227412349d8b3fe5af0"}
  })
    .done(function(msg){

    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

      $(".box2").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
    }
    var str= msg.documents[i].contents;
    var str2=str.substring(0,10);
  });