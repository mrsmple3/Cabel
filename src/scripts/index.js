document.addEventListener("DOMContentLoaded", function () {
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

  const submenus = document.querySelectorAll(".submenu");
  const allNavbarMenus = [];

  submenus.forEach((submenu) => {
    const navbarMenu = submenu.closest(".navbar_item");
    if (navbarMenu) {
      allNavbarMenus.push(navbarMenu);
    }
  });

  const allSubmenus = document.querySelectorAll(".navbar_item .submenu");
  const allSvgs = document.querySelectorAll(".navbar_item svg");

  const allMenus = [];
  allNavbarMenus.forEach((item, index) => {
    const menu = {
      menu: item,
      submenu: allSubmenus[index],
      svg: allSvgs[index],
    };
    allMenus.push(menu);
  });
  allMenus.forEach((menu) => {
    hoverNavbar(menu.menu, menu.submenu, menu.svg, allSubmenus);
  });

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

  //!menu
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const lockPadding = document.querySelectorAll(".lock_padding");
  if (window.innerWidth < 768) {
    const burgerMenu = document.getElementById("burger_menu");
    const closeMenu = document.getElementById("close_menu");
    console.log(document.getElementById("menu"));
    const menu = document.getElementById("menu");

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
  }

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
  if (window.innerWidth < 768) {
    const menuNavbarMenus = [];

    submenus.forEach((submenu) => {
      const navbarMenu = submenu.closest(".menu_navbar_item");
      if (navbarMenu) {
        menuNavbarMenus.push(navbarMenu);
      }
    });

    const menuAllSubmenus = document.querySelectorAll(
      ".menu_navbar_item .submenu"
    );
    const allMenuSvg = document.querySelectorAll(".menu_navbar_item svg");
    const menuCatalog = {
      menu: menuNavbarMenus[0],
      submenu: menuAllSubmenus[0],
      svg: allMenuSvg[0],
    };
    const menuAbout = {
      menu: menuNavbarMenus[1],
      submenu: menuAllSubmenus[1],
      svg: allMenuSvg[1],
    };
    const menuReference = {
      menu: menuNavbarMenus[2],
      submenu: menuAllSubmenus[2],
      svg: allMenuSvg[2],
    };
    const menuContent = {
      menu: menuNavbarMenus[3],
      submenu: menuAllSubmenus[3],
      svg: allMenuSvg[3],
    };

    const menuAllMenus = [menuCatalog, menuAbout, menuReference, menuContent];

    menuAllMenus.forEach((menu) => {
      clickMenu(menu.menu, menu.submenu, menu.svg, menuAllSubmenus);
    });
  }

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
});
