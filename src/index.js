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
  menu: document.querySelector(".catalog"),
  submenu: document.querySelector(".submenu_catalog"),
  svg: document.querySelector(".catalog-svg"),
};
const about = {
  menu: document.querySelector(".about"),
  submenu: document.querySelector(".submenu_about"),
  svg: document.querySelector(".about-svg"),
};
const reference = {
  menu: document.querySelector(".reference"),
  submenu: document.querySelector(".submenu_reference"),
  svg: document.querySelector(".reference-svg"),
};
const content = {
  menu: document.querySelector(".content"),
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


