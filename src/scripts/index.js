function hoverNavbar(menu, submenu, svg, allSubmenus) {
  menu.addEventListener("mouseenter", () => {
    allSubmenus.forEach((sub) => {
      if (sub !== submenu) {
        sub.style.visibility = "hidden";
        sub.style.opacity = "0";
      }
    });

    submenu.style.visibility = "visible";
    submenu.style.opacity = "1";
    svg.style.transform = "rotate(-180deg)";
  });
  let isHovering = false;

  menu.addEventListener("mouseenter", () => {
    isHovering = true;
    submenu.style.visibility = "visible";
    submenu.style.opacity = "1";
    svg.style.transform = "rotate(-180deg)";
  });
  submenu.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  menu.addEventListener("mouseleave", () => {
    isHovering = false;
    setTimeout(() => {
      if (!isHovering) {
        submenu.style.visibility = "hidden";
        submenu.style.opacity = "0";
        svg.style.transform = "rotate(0deg)";
      }
    }, 300);
  });
  submenu.addEventListener("mouseleave", () => {
    isHovering = false;
    setTimeout(() => {
      if (!isHovering) {
        submenu.style.visibility = "hidden";
        submenu.style.opacity = "0";
        svg.style.transform = "rotate(0deg)";
      }
    }, 300);
  });
}

const catalog = {
  menu: document.getElementById("catalog"),
  submenu: document.querySelector(".submenu_catalog"),
  svg: document.querySelector(".catalog-svg"),
};
const about = {
  menu: document.getElementById("about"),
  submenu: document.querySelector(".submenu_about"),
  svg: document.querySelector(".about-svg"),
};
const reference = {
  menu: document.getElementById("reference"),
  submenu: document.querySelector(".submenu_reference"),
  svg: document.querySelector(".reference-svg"),
};
const content = {
  menu: document.getElementById("content"),
  submenu: document.querySelector(".submenu_content"),
  svg: document.querySelector(".content-svg"),
};

const allMenus = [catalog, about, reference, content];

const allSubmenus = [
  catalog.submenu,
  about.submenu,
  reference.submenu,
  content.submenu,
];

allMenus.forEach((menu) => {
  hoverNavbar(menu.menu, menu.submenu, menu.svg, allSubmenus);
});

//!menu Items
function clickMenu(menu, submenu, svg, allSubmenus) {
  menu.addEventListener("click", () => {
    allSubmenus.forEach((sub) => {
      if (sub !== submenu && sub.classList.contains("show")) {
        sub.classList.remove("show");
        sub.previousElementSibling
          .closest(".padding-b_100")
          .classList.remove("padding-b_100");
        const subSvg = sub.previousElementSibling.querySelector("svg");
        if (subSvg) {
          subSvg.classList.remove("rotate_180");
        }
      }
    });
    submenu.classList.toggle("show");
    menu.classList.toggle("padding-b_100");
    svg.classList.toggle("rotate_180");
  });
}
const menuCatalog = {
  menu: document.getElementById("menu-catalog"),
  submenu: document.querySelector(".menu-submenu_catalog"),
  svg: document.querySelector(".menu-catalog-svg"),
};
const menuAbout = {
  menu: document.getElementById("menu-about"),
  submenu: document.querySelector(".menu-submenu_about"),
  svg: document.querySelector(".menu-about-svg"),
};
const menuReference = {
  menu: document.getElementById("menu-reference"),
  submenu: document.querySelector(".menu-submenu_reference"),
  svg: document.querySelector(".menu-reference-svg"),
};
const menuContent = {
  menu: document.getElementById("menu-content"),
  submenu: document.querySelector(".menu-submenu_content"),
  svg: document.querySelector(".menu-content-svg"),
};
const menuAllMenus = [menuCatalog, menuAbout, menuReference, menuContent];

const menuAllSubmenus = [
  menuCatalog.submenu,
  menuAbout.submenu,
  menuReference.submenu,
  menuContent.submenu,
];
menuAllMenus.forEach((menu) => {
  clickMenu(menu.menu, menu.submenu, menu.svg, menuAllSubmenus);
});

//!menu
const burgerMenu = document.getElementById("burger_menu");
const closeMenu = document.getElementById("close_menu");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const lockPadding = document.querySelectorAll(".lock_padding");
const timeOut = 500;
let unlock = true;

burgerMenu.addEventListener("click", () => {
  if (unlock) {
    menu.classList.add("active");
    closeMenu.classList.add("show");
    burgerMenu.classList.add("hide");
    bodyLock();
  }
});

closeMenu.addEventListener("click", () => {
  if (unlock) {
    menu.classList.remove("active");
    closeMenu.classList.remove("show");
    burgerMenu.classList.remove("hide");
    bodyUnlock();
  }
});

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const element = lockPadding[index];
      element.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeOut);
}

function bodyUnlock() {
  setTimeout(() => {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeOut);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeOut);
}

//! search
const searchBlock = document.getElementById("search_block");
const searchButton = document.getElementById("search_btn");
const searchBlockCloseBtn = document.querySelector(".group");

searchButton.addEventListener("click", () => {
  searchBlock.classList.toggle("top-0");
});
searchBlockCloseBtn.addEventListener("click", () => {
  searchBlock.classList.remove("top-0");
});

//stiky
const headerSticky = document.querySelector(".header_sticky");
const headerOffsetTop = headerSticky.offsetTop;
const contentFirst = document.querySelector(".first");
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= headerOffsetTop) {
    headerSticky.classList.add("fixed");
    contentFirst.classList.add("mt_83");
  } else {
    headerSticky.classList.remove("fixed");
    contentFirst.classList.remove("mt_83");
  }
}
window.addEventListener("scroll", handleScroll);
