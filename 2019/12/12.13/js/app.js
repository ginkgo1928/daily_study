console.log('<script> 요소를 사용해 js/app.js 파일을 HTML 문서에 읽어들였습니다.');

var bgColor = window.prompt('문서의 배경 색상을 입력해주시겠습니까?', '#eced00');

document.querySelector('body').style.cssText = 'background: ' + bgColor;

console.log('<body> 요소에 CSS 스타일을 적용하여 배경 색을 ' + bgColor + ' 색상으로 변경 처리했습니다.');
