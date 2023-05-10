// // today is
// const today = document.querySelector(".today-text");
// const letters = ["...🌈", "...🌈", "...🌈"];
// const speed = 100;

// const typing = async () => {
//   let i = 0;
//   const letter = letters[i].split("");

//   while (letter.length) {
//     await wait(speed);
//     today.innerHTML += letter.shift();
//   }

//   await wait(800);

//   remove();
// };

// const remove = async () => {
//   let i = 0;
//   const letter = letters[i].split("");

//   while (letter.length) {
//     await wait(speed);

//     letter.pop();
//     today.innerHTML = letter.join("");
//   }

//   i = !letters[i + 1] ? 0 : i + 1;
//   typing();
// };

// function wait(ms) {
//   return new Promise((res) => setTimeout(res, ms));
// }

// setTimeout(typing, 1500);

// 타이핑
// let content = `협업과 커뮤니케이션 능력을 바탕으로 \n 사용자가 원하는 최상의 경험을 제공하기 위해\n 노력하는 신입 프론트엔드 개발자입니다.`;
// let introText = document.querySelector(".intro-text");
// let i = 0;

// const typingText = () => {
//   if (i < content.length) {
//     let txt = content.charAt(i);
//     introText.innerHTML += txt === "\n" ? "<br/>" : txt;
//     i++;
//   }
// };

// setInterval(typingText, 80);

// nav 버튼
let btn = document.querySelectorAll(".tabBtn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    console.log(btn[i]);
    for (let j = 0; j < btn.length; j++) {
      btn[j].style.backgroundColor = "#129FCE";
      btn[j].style.color = "white";
    }
    this.style.backgroundColor = "#f3f1f1";
    this.style.color = "black";
  });
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
  "https://skillicons.dev/icons?i=sass",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=git",
];

for (let i = 0; i < mainSkillsUrl.length; i++) {
  let url = `<ul>
              <li class="mx-2 my-2"><img src="${mainSkillsUrl[i]}"/></li>
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
              <li class="mx-2 my-2"><img src="${onceSkillsUrl[i]}"/></li>
            </ul>`;
  $(".once-skills-box").append(url);
}

let skillContent = [
  "웹페이지 디자인 및 마크업을 할 수 있으며 반응형 웹을 적용 할 수 있습니다.",
  "Javascript문법과 DOM을 이해하고, 효율적인 코드로 다양한 상황에 적용 할 수 있도록 노력합니다.",
  "React hook을 이해하고, 재사용 가능한 컴포넌트 설계를 합니다.",
  "Git의 명령어를 사용하여 Repositories에 접근할 수 있습니다.",
];

for (let i = 0; i < skillContent.length; i++) {
  let content = `<div class="skill-content">
                    <div><img src="img/check.png" /></div>
                    <div>${skillContent[i]}</div>`;
  $(".skill-content-box").append(content);
}

// project card
const projectCard = [
  {
    title: "ToDoList",
    url: "",
    memo: "To Do List",
    skill: "HTML,CSS,JAVASCRIPT",
  },
  {
    title: "travelPage",
    url: "",
    memo: "Travel Homepage",
    skill: "HTML,CSS,JAVASCRIPT",
  },
  {
    title: "travelPage",
    url: "",
    memo: "Travel Homepage",
    skill: "HTML,CSS,JAVASCRIPT",
  },
  {
    title: "travelPage",
    url: "",
    memo: "Travel Homepage",
    skill: "HTML,CSS,JAVASCRIPT",
  },
];

for (let i = 0; i < projectCard.length; i++) {
  let card = `<div class="col-lg-4 col-md-6 col-sm-12 p- mb-3">
                <div class="project-cards" onclick="window.open('${
                  projectCard[i].url
                }')">
                  <img src="${`img/${projectCard[i].title}.png`}">
                  <h5 class="card-hover-title">${projectCard[i].memo}</h5>
                                    
                </div>
              </div>`;
  $(".project-card-wrap").append(card);
}
