// 카운트다운 날짜를 설정
      var countDownDate = new Date("September 28, 2022 00:00:00").getTime();

      // 1초마다 카운트다운 업데이트
      var x = setInterval(function() {

        // 오늘 날짜와 시간 가져오기
        var now = new Date().getTime();

        // 지금과 카운트다운 날짜 사이의 거리 찾기
        var distance = countDownDate - now;

        // 일, 시간, 분 및 초에 대한 시간 계산
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // #timer에 결과를 출력
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s";

        // 카운트 다운이 끝나면 텍스트를 작성
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);