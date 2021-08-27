  $(function(){

    //first-child
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"사랑" },
      headers:{Authorization: "KakaoAK bbc285d4e573b227412349d8b3fe5af0"}
    })
      .done(function( msg ) {
      console.log( msg );

      $(".box").empty();
      var boxs = document.getElementsByClassName('box');

      for(var i=0; i<boxs.length; i++){
        $(".list_a >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".list_a >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".list_a >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,60);

        $(".list_a >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
        $(".list_a >.box").eq(i).append("<h5>"+msg.documents[i].price+"</h5>");  
      }
    });

    //first-child
    $(".booklist>li:first-child").mouseenter(function(){

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"사랑" },
        headers:{Authorization: "KakaoAK bbc285d4e573b227412349d8b3fe5af0"}
      })
        .done(function( msg ) {
        console.log( msg );

        $(".box").empty();
        var boxs = document.getElementsByClassName('box');

        for(var i=0; i<boxs.length; i++){

          $(".list_a >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $(".list_a >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $(".list_a >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

          var str=msg.documents[i].contents;
          var str2=str.substring(0,60);

          $(".list_a >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $(".list_a >.box").eq(i).append("<h5>"+msg.documents[i].price+"</h5>");  
        }
      });
    });

    //nth-child(2)
    $(".booklist>li:nth-child(2)").mouseenter(function(){

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"일" },
        headers:{Authorization: "KakaoAK bbc285d4e573b227412349d8b3fe5af0"}
      })
        .done(function( msg ) {
        console.log( msg );

        $(".box").empty();
        // for문 (8개)
        var boxs = document.getElementsByClassName('box');

        for(var i=0; i<boxs.length; i++){

          $(".list_b >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $(".list_b >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $(".list_b >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

          var str=msg.documents[i].contents;
          var str2=str.substring(0,60);

          $(".list_b >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $(".list_b >.box").eq(i).append("<h5>"+msg.documents[i].price+"</h5>");  
        }
      });
    });

    //last-child
    $(".booklist>li:last-child").mouseenter(function(){

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"나" },
        headers:{Authorization: "KakaoAK bbc285d4e573b227412349d8b3fe5af0"}
      })
        .done(function( msg ) {
        console.log( msg );

        $(".box").empty();
        // for문 (8개)
        var boxs = document.getElementsByClassName('box');

        for(var i=0; i<boxs.length; i++){

          $(".list_c >.box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
          $(".list_c >.box").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
          $(".list_c >.box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

          var str=msg.documents[i].contents;
          var str2=str.substring(0,60);

          $(".list_c >.box").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>");
          $(".list_c >.box").eq(i).append("<h5>"+msg.documents[i].price+"</h5>");  
        }
      });
    });
  });