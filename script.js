const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav a");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector("#formNote");
const solutionButtons = document.querySelectorAll("[data-solution]");
const solutionImage = document.querySelector("#solutionImage");
const solutionTag = document.querySelector("#solutionTag");
const solutionTitle = document.querySelector("#solutionTitle");
const solutionCopy = document.querySelector("#solutionCopy");

const solutions = {
  campus: {
    tag: "Campus Innovation",
    title: "校园科创课程建设",
    copy: "为学校设计无人机认知、飞行体验、航线规划、任务挑战和社团训练课程，帮助学生建立工程思维和科技实践能力。",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1100&q=82",
    alt: "校园科创无人机课程",
  },
  media: {
    tag: "Aerial Media",
    title: "活动航拍与影像采集",
    copy: "为开幕式、赛事、文旅活动、校园活动和企业宣传提供空中视角素材采集，支持现场记录与后期整理。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=82",
    alt: "户外活动航拍场景",
  },
  inspection: {
    tag: "Inspection",
    title: "巡查巡检与现场勘察",
    copy: "面向园区、工地、农田、水域和大型场地，提供快速空中观察、路线勘察、巡查影像和项目记录支持。",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1100&q=82",
    alt: "无人机巡查巡检场景",
  },
  training: {
    tag: "Enterprise Training",
    title: "企业无人机应用培训",
    copy: "帮助企业人员掌握飞行安全、设备操作、任务规划和基础应用方法，为内部低空应用项目培养基础能力。",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1100&q=82",
    alt: "企业无人机培训设备",
  },
};

menuToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

solutionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.solution;
    const item = solutions[key];

    if (!item || !solutionImage || !solutionTag || !solutionTitle || !solutionCopy) {
      return;
    }

    solutionButtons.forEach((current) => current.classList.remove("is-active"));
    button.classList.add("is-active");
    solutionImage.src = item.image;
    solutionImage.alt = item.alt;
    solutionTag.textContent = item.tag;
    solutionTitle.textContent = item.title;
    solutionCopy.textContent = item.copy;
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();

  formNote.classList.remove("is-sent", "is-error");

  if (!name || !phone) {
    formNote.textContent = "请先填写联系人和联系电话，方便后续对接。";
    formNote.classList.add("is-error");
    return;
  }

  formNote.textContent = "已收到咨询意向。正式上线时可在这里接入企业微信、邮箱或后台接口。";
  formNote.classList.add("is-sent");
  form.reset();
});
