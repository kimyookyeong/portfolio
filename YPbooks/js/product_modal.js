      // 모달 가져오기
      var modal = document.getElementById("myModal");

      // 모달을 여는 버튼 가져오기
      var btn = document.getElementById("modalBtn");

      // 모달을 닫는 <span> 요소를 가져옴
      var span = document.getElementsByClassName("close")[0];

      // 버튼을 클릭하면 모달을 엽니다 
      btn.onclick = function() {
        modal.style.display = "block";
      }

      // <span>(x)을 클릭하면 모달을 닫습니다
      span.onclick = function() {
        modal.style.display = "none";
      }

      // 모달 외부의 아무 곳이나 클릭하면 닫습니다
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }