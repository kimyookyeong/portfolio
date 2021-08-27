$(function(){
        $.ajax({
          url: "./js/new.json",
          dataType: "json",
          success : function(data){
            if(data.length>0){

              for(var i in data){
                var title = data[i].title;
                var price = data[i].price;
                var sale = data[i].price;
                var url = data[i].url;

                $(".box1").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
                $(".box1").eq(i).append('<h4><a href="#">'+data[i].title+"</a><h4>");      
                $(".box1").eq(i).append('<p>'+data[i].price+"</p>");                             
                $(".box1").eq(i).append('<span><a href="#">'+data[i].sale+"</a></span>");
              }
            }
          }
        });
      });