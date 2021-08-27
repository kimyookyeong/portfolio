   var mybutton = document.getElementById("myBtn");

      // 사용자가 문서 상단에서 20px 아래로 스크롤하면 버튼이 표시됨
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // 사용자가 버튼을 클릭하면 문서 상단으로 스크롤
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }