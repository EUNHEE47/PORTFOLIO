let content = `안녕하세요! 신입 개발자 박은희 입니다.`;
let profileTyping = document.querySelector(".profile-typing");
let i = 0;

function typingText() {
  if (i < content.length) {
    let txt = content.charAt(i);
    profileTyping.innerHTML += txt == "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typingText, 80);

let btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    for (let j = 0; j < btn.length; j++) {
      btn[j].style.backgroundColor = "#129FCE";
      btn[j].style.color = "white";
    }
    this.style.backgroundColor = "#f3f1f1";
    this.style.color = "black";
  });
}
