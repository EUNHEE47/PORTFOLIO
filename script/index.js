const today = document.querySelector(".today-text");
const letters = ["...🌈", "...🌈", "...🌈"];
const speed = 100;

const typing = async () => {
  let i = 0;
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    today.innerHTML += letter.shift();
  }

  await wait(800);

  remove();
};

// 글자 지우는 효과
const remove = async () => {
  let i = 0;
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    today.innerHTML = letter.join("");
  }

  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

// link
function notion() {
  window.open(
    "https://adiantum47.notion.site/EUNI_-1d34451ba177481ba9a8312be62f8986"
  );
}

function github() {
  window.open("https://github.com/EUNHEE47");
}

let content = `안녕하세요! 신입 개발자 박은희 입니다.`;
let titleTyping = document.querySelector(".title-typing");
let i = 0;
function typingText() {
  if (i < content.length) {
    let txt = content.charAt(i);
    titleTyping.innerHTML += txt == "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typingText, 80);

let btn = document.querySelectorAll(".tabBtn");

// ---------------------------------------------------ㅅㅄㅄㅄㅄㅄㅂ
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("mouseover", function () {
//     btn[i].style.backgroundColor = "#f3f1f1";
//     btn[i].style.color = "black";
//   });
// }

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

// btn[i].addEventListener("mouseover", function () {
//   for (let j = 0; j < btn.length; j++) {
//     btn[j].addEventListener("mouseout", function () {
//       btn[j].style.backgroundColor = "#129FCE";
//       btn[j].style.color = "white";
//     });
//   }
//   this.style.backgroundColor = "#f3f1f1";
//   this.style.color = "black";
// });

// ---------------------------------------------------ㅅㅄㅄㅄㅄㅄㅂ

// project card
let projectCard = [
  {
    title: "ToDoList",
    url: "https://eunhee47.github.io/ToDoList/",
    memo: "To Do list",
  },
  {
    title: "travelPage",
    url: "https://eunhee47.github.io/Travel/",
    memo: "Travel Homepage",
  },
];

for (let i = 0; i < projectCard.length; i++) {
  let card = `<div class="col-lg-6 col-md-12 col-sm-12 p-2  project-cards" 
              onclick="window.open('${projectCard[i].url}')">
                  <img src="${`img/${projectCard[i].title}.png`}">
                  <p class="card-hover-text">${projectCard[i].memo}</p>
              </div>`;
  $(".project-card-wrap").append(card);
}

// skills
let mainSkillsUrl = [
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=jquery",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=bootstrap",
  "https://skillicons.dev/icons?i=linux",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=git",
];

for (let i = 0; i < mainSkillsUrl.length; i++) {
  let url = `<ul>
              <li class="mx-2"><img src="${mainSkillsUrl[i]}"/></li>
            </ul>`;
  $(".main-skills-box").append(url);
}

let onceSkillsUrl = [
  "https://skillicons.dev/icons?i=java",
  "https://skillicons.dev/icons?i=spring",
  "https://skillicons.dev/icons?i=eclipse",
];

for (let i = 0; i < onceSkillsUrl.length; i++) {
  let url = `<ul>
              <li class="mx-2"><img src="${onceSkillsUrl[i]}"/></li>
            </ul>`;
  $(".once-skills-box").append(url);
}
