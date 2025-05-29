// 함수 선언문
function add(a, b) {
    return a + b;
};

// 함수 표현식
const subtract = function(a, b) {
    return a - b;
};

// 화살표 함수
const multiply = (a, b) => a * b;

const greet = name => `Hello, ${name}!`;

const doSomething = () => {
    // 여러 줄 코드
    return result;
};

// 즉시 호출 함수 표현식
(function() {
    console.log("This function is executed immediately!");
  })();

// 함수 생성자
const add = new Function('a', 'b', 'return a + b');
console.log(add(5, 3)); // 8