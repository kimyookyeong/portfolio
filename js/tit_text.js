const resolver = {
          resolve: function resolve(options, callback) {
            // 해결할 문자열
            const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
            const combinedOptions = Object.assign({}, options, {resolveString: resolveString});

            function getRandomInteger(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            function randomCharacter(characters) {
              return characters[getRandomInteger(0, characters.length - 1)];
            };

            function doRandomiserEffect(options, callback) {
              const characters = options.characters;
              const timeout = options.timeout;
              const element = options.element;
              const partialString = options.partialString;

              let iterations = options.iterations;

              setTimeout(() => {
                if (iterations >= 0) {
                  const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

                  // 최종 상태로 임의의 문자가 없는 partialString을 보장
                  if (iterations === 0) {
                    element.textContent = partialString;
                  } else {
                    // partialString의 마지막 문자를 임의의 문자로 바꿈
                    element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                  }

                  doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                  callback(); 
                }
              }, options.timeout);
            };

            function doResolverEffect(options, callback) {
              const resolveString = options.resolveString;
              const characters = options.characters;
              const offset = options.offset;
              const partialString = resolveString.substring(0, offset);
              const combinedOptions = Object.assign({}, options, {partialString: partialString});

              doRandomiserEffect(combinedOptions, () => {
                const nextOptions = Object.assign({}, options, {offset: offset + 1});

                if (offset <= resolveString.length) {
                  doResolverEffect(nextOptions, callback);
                } else if (typeof callback === "function") {
                  callback();
                }
              });
            };

            doResolverEffect(combinedOptions, callback);
          } 
        }

        /* 글 */
        const strings = [
          'HTML',
          'CSS',
          'RESPONSIVE WEB',
          'JAVA SCRIPT',
          'J-QUERY',
          'JSON',
          'AJAX',
          'OPEN API'
        ];

        let counter = 0;

        const options = {
          // 초기 위치
          offset: 0,
          // 각 임의의 문자 사이의 시간 초과
          timeout: 5,
          // 표시할 임의의 문자 수
          iterations: 10,
          // 무작위로 선택할 수 있는 캐릭터
          characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
          // 해결할 문자열
          resolveString: strings[counter],
          // 요소
          element: document.querySelector('[data-target-resolver]')
        }

        // 해결 완료 시 콜백 함수
        function callback() {
          setTimeout(() => {
            counter ++;

            if (counter >= strings.length) {
              counter = 0;
            }

            let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
            resolver.resolve(nextOptions, callback);
          }, 1000);
        }

        resolver.resolve(options, callback);