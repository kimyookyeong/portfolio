  $(function () {

    // slider 배경색 및 이미지 변경
    var slider_bgc = ["#ffe6e6", "#ffe6cc", "#ffffe6", "#e6ffe6", "#e6ffff", "#e6e6ff"]
    var slider_main_box = $("#slider_main > div");

    $("#slider_btn > ul > li").mouseover(function () {
      $("#slider").css("background-color", slider_bgc[$(this).index()]);
      slider_main_box.stop().hide();
      slider_main_box.eq($(this).index()).stop().show();

      $("#slider_btn > ul > li").removeClass("slider_btn_hover");
      $(this).addClass("slider_btn_hover");
    }).mouseleave(function () {
      $("#slider_btn > ul > li").removeClass("slider_btn_hover");
      $(this).addClass("slider_btn_hover");
    });

    // slider 루프
    var i = 0

    function slider_loop() {
      i++;

      if (i > $("#slider_main > div:last").index()) {
        i = 0;
      };

      $("#slider").css("background-color", slider_bgc[i]);
      slider_main_box.stop().hide();
      slider_main_box.eq(i).stop().show();
      $("#slider_btn > ul > li").removeClass("slider_btn_hover");
      $("#slider_btn > ul > li").eq(i).addClass("slider_btn_hover");
    }

    setInterval(slider_loop, 2000)    
  });