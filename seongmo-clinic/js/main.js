document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");
  const dim = document.querySelector(".dim");
  const mobileItems = document.querySelectorAll(".mobile-menu ul > li > a");

  // ✅ 모바일 메뉴 열기
  hamburger.addEventListener("click", () => {
    hamburger.classList.add("active");
    mobileMenu.classList.add("active");
    dim.style.opacity = "1";
    dim.style.pointerEvents = "auto";
  });

  // ✅ 모바일 메뉴 닫기
  function closeMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    dim.style.opacity = "0";
    dim.style.pointerEvents = "none";
  }
  closeBtn.addEventListener("click", closeMenu);
  dim.addEventListener("click", closeMenu);

  // ✅ 모바일 하위메뉴 toggle
  mobileItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = item.parentElement;
      if (parent.querySelector(".sub")) {
        e.preventDefault();
        parent.classList.toggle("active");
      }
    });
  });

  // ✅ 로고 & SNS 아이콘 hover 전환 (PC 전용)
  const logoImg = document.getElementById("logo-img");
  const snsImgs = document.querySelectorAll(".sns a img");

  const iconSwap = [
    { white: "kakao_white.svg", color: "kakao_color.svg" },
    { white: "instagram_white.svg", color: "instagram_color.svg" },
    { white: "blog_white.svg", color: "blog_color.svg" },
    { white: "phone_white.svg", color: "phone_color.svg" },
  ];

  const header = document.getElementById("header");

  header.addEventListener("mouseenter", () => {
    logoImg.src = "assets/logo/logo_color.png";
    snsImgs.forEach((img, i) => {
      img.src = `assets/icons/${iconSwap[i].color}`;
    });
  });

  header.addEventListener("mouseleave", () => {
    logoImg.src = "assets/logo/logo_white.png";
    snsImgs.forEach((img, i) => {
      img.src = `assets/icons/${iconSwap[i].white}`;
    });
  });
});
