const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const dim = document.querySelector(".dim");
const mobileItems = document.querySelectorAll(".mobile-menu > ul > li > a");

// 햄버거 메뉴 열기
hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  dim.style.opacity = "1";
  dim.style.pointerEvents = "auto";
});

// 메뉴 닫기
function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  dim.style.opacity = "0";
  dim.style.pointerEvents = "none";
}
closeBtn.addEventListener("click", closeMenu);
dim.addEventListener("click", closeMenu);

// ✅ 모바일 하위메뉴 토글
mobileItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parent = item.parentElement;
    const sub = parent.querySelector(".sub");
    if (sub) {
      e.preventDefault();
      // 다른 메뉴 닫기
      document.querySelectorAll(".mobile-menu ul li.active").forEach((li) => {
        if (li !== parent) li.classList.remove("active");
      });
      // 현재 메뉴만 토글
      parent.classList.toggle("active");
    }
  });
});

// ✅ 창 리사이즈 시 강제 닫기
window.addEventListener("resize", () => {
  closeMenu();
});
