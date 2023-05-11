//--------------------------------------------today is
const today = document.querySelector(".today");
const letters = ["...JavaScript", "...React"];

const speed = 100;

let i = 0;
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    today.innerHTML += letter.shift();
  }

  await wait(800);

  remove();
};

const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    today.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

//--------------------------------------------nav

let menus = ["Home", "About", "Skills", "Project", "Contact"];

menus.forEach((item) => {
  let element = `<div onclick="location.href='#${item}'" class="nav-btn" id="#${item}">${item}</div>
                `;
  $(".menus").append(element);
});

let btn = document.querySelectorAll(".nav-btn");

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

$(".nav-toggleBtn").click(function () {
  // $(this).toggleClass("active");
  // $('menus').toggleClass('')
  $(".menus").slideToggle(400);
});

//--------------------------------------------about
const aboutContent = [
  {
    icon: "fa-regular fa-calendar-days",
    title: "BIRTH DATE",
    content: "1993.04.07",
  },
  {
    icon: "fa-solid fa-phone",
    title: "PHONE",
    content: "010-5454-4373",
  },
  {
    icon: "fa-solid fa-school",
    title: "EDUCATION",
    content: `2022.11 ~ 2023.03<br>국제컴퓨터아트학원`,
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "CAREER",
    content: `2016.07 ~ 2022.08<br>타이드스퀘어`,
  },
];

aboutContent.forEach((about) => {
  let element = `<div class="col-lg-6 col-md-6 col-sm-12 info">
                  <div>
                    <h4><i class="${about.icon}" style="color: #000000"></i></h4>
                  </div>
                  <div>
                  <h4>${about.title}</h4>
                  <p>${about.content}</p>
                  </div>
                </div>`;
  $(".aboutContent").append(element);
});

//--------------------------------------------skills
let mainSkillsUrl = [
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=jquery",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=bootstrap",
  "https://skillicons.dev/icons?i=sass",
  "https://skillicons.dev/icons?i=github",
  "https://skillicons.dev/icons?i=git",
  "https://skillicons.dev/icons?i=redux",
];

mainSkillsUrl.forEach((item) => {
  let url = `<ul>
              <li class="mx-2 my-2"><img src="${item}"/></li>
            </ul>`;
  $(".main-skills-box").append(url);
});

let onceSkillsUrl = [
  "https://skillicons.dev/icons?i=java",
  "https://skillicons.dev/icons?i=spring",
  "https://skillicons.dev/icons?i=eclipse",
];

onceSkillsUrl.forEach((item) => {
  let url = `<ul>
              <li class="mx-2 my-2"><img src="${item}"/></li>
            </ul>`;
  $(".once-skills-box").append(url);
});

let skillContent = [
  "웹페이지 디자인 및 마크업을 작성하며, 반응형 웹을 적용 할 수 있습니다.",
  "Javascript문법과 DOM을 이해하고, 효율적인 코드로 다양한 상황에 적용 할 수 있도록 노력합니다.",
  "React hook을 이해하고, 재사용 가능한 컴포넌트 설계를 합니다.",
  "Git의 명령어를 사용하여 Repositories에 접근할 수 있습니다.",
];

skillContent.forEach((content) => {
  let element = `<div class="skill-content">
  <div><img src="img/check.png" /></div>
  <div>${content}</div>`;
  $(".skill-content-box").append(element);
});

//--------------------------------------------project card
const projectCard = [
  {
    title: "ToDoList",
    url: "https://eunhee47.github.io/ToDoList/",
    memo: "To Do List",
  },
  {
    title: "travelPage",
    url: "https://eunhee47.github.io/Travel/",
    memo: "Travel",
  },
  {
    title: "miniGames",
    url: "https://eunhee47.github.io/gameWorld",
    memo: "Mini Games",
  },
  {
    title: "hnmApp",
    url: "https://adiantumhnm.netlify.app/",
    memo: "H&M",
  },
  {
    title: "NetflixApp",
    url: "",
    memo: "NETFLIX(준비중입니다.)",
  },
  {
    title: "studyCafe",
    url: "",
    memo: "스터디카페 매니저(준비중입니다.)",
  },
];

for (let i = 0; i < projectCard.length; i++) {
  let card = `<div class="col-lg-4 col-md-6 col-sm-12">
                <div class="project-cards" onclick="window.open('${
                  projectCard[i].url
                }')">
                  <img src="${`img/${projectCard[i].title}.png`}">
                  <h5 class="card-hover-title">${projectCard[i].memo}</h5>
                </div>
              </div>`;
  $(".project-card-wrap").append(card);
}
