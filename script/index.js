let content = "안녕하세요! 신입 개발자 박은희 입니다.";
let mainTyping = document.querySelector(".main-typing");
let i = 0;

function typingText() {
  if (i < content.length) {
    let txt = content.charAt(i);
    mainTyping.innerHTML += txt == "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typingText, 80);
