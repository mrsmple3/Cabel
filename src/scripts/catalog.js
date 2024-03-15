document.addEventListener("DOMContentLoaded", function () {
  //Catalogs
  const containerCards = document.querySelector(".cards");
  const Categories = [
    {
      id: 1,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ВВГ, АВВГ, ВВГЭ, АВВГЭ, ВБбШв, АВБбШв",
      imgSrc: "1.png",
    },
    {
      id: 2,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ВВГ-П, АВВГ-П",
      imgSrc: "2.png",
    },
    {
      id: 3,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "3.png",
    },
    {
      id: 4,
      category: "Кабели для солнечных систем",
      href: "",
      title:
        "ВВГнг(А), АВВГнг(А), ВВГЭнг(А), АВВГЭнг(А), ВБШвнг(А), АВБШвнг(А)",
      imgSrc: "4.png",
    },
    {
      id: 5,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ВВГ-Пнг(А), АВВГ-Пнг(А)",
      imgSrc: "5.png",
    },
    {
      id: 6,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ПвБШвнг(В), АПвБШвнг(В)",
      imgSrc: "1.png",
    },
    {
      id: 7,
      category: "Кабели для солнечных систем",
      href: "",
      title: "ПвБШвнг(В), АПвБШвнг(В)",
      imgSrc: "2.png",
    },
    {
      id: 8,
      category:
        "Силовые кабеля с пластмассовой изоляцией на номинальное напряжение до 3-6 кв",
      href: "",
      title: "ВВГ, АВВГ, ВВГЭ, АВВГЭ, ВБбШв, АВБбШв",
      imgSrc: "5.png",
    },
    {
      id: 9,
      category:
        "Силовые кабеля с пластмассовой изоляцией на номинальное напряжение до 3-6 кв",
      href: "",
      title: "ВВГ-П, АВВГ-П",
      imgSrc: "1.png",
    },
    {
      id: 10,
      category:
        "Силовые кабеля с пластмассовой изоляцией на номинальное напряжение до 3-6 кв",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "2.png",
    },
    {
      id: 11,
      category:
        "Кабели с изоляцией из сшитого полиэтилена на напряжение от 6 до 35 кв",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "3.png",
    },
    {
      id: 12,
      category: "Контрольные кабели",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "5.png",
    },
    {
      id: 13,
      category: "Провода для передачи электроэнергии",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "2.png",
    },
    {
      id: 14,
      category: "Кабель для систем пожарной и охранной сигнализации",
      href: "",
      title: "ПвВГ, АПвВГ, ПвВГЭ, АПвВГЭ, ПвБШв, АПвБШв,ПвВГ-П, АПв...",
      imgSrc: "1.png",
    },
  ];

  const currentCategory = document.querySelector(".current_category");
  const catalogItems = document.querySelectorAll(".category_item");
  catalogItems[0].classList.add("active");
  currentCategory.textContent = catalogItems[0].textContent;
  const currentListCategory = currentCategory.textContent
    .trim()
    .replace(/\s{2,}/g, " ");
  GenerateCards(currentListCategory, Categories);

  catalogItems.forEach((item) => {
    item.addEventListener("click", () => {
      catalogItems.forEach((listItem) => {
        listItem.classList.remove("active");
      });
      item.classList.add("active");
      currentCategory.textContent = item.textContent;
      //CategoryList
      containerCards.innerHTML = "";
      const currentListCategory = currentCategory.textContent
        .trim()
        .replace(/\s{2,}/g, " ");
      GenerateCards(currentListCategory, Categories);
    });
  });

  //
  const selectCategories = document.getElementById("mobile_categories");
  const options = document.querySelector(".select_dropdown .options");
  const currentOption = document.querySelector(".current_option");
  currentOption.textContent = catalogItems[0].textContent;
  const allOptions = [];
  const optionsSvg = document.querySelector(".select_dropdown svg");
  let unlockOption = true;
  let mobileSize = false;
  window.addEventListener("resize", function () {
    mobileSize = window.innerWidth <= 768 ? true : false;
  });
  if (window.innerWidth <= 768 || mobileSize) {
    catalogItems.forEach((category) => {
      const option = document.createElement("li");
      option.classList.add("dropdown_item");
      allOptions.push(option);
      option.textContent = category.textContent;
      //change text in currentOpstion
      option.addEventListener("click", (e) => {
        if (unlockOption) {
          currentOption.textContent = option.textContent;
          containerCards.innerHTML = "";
          GenerateCards(
            option.textContent.trim().replace(/\s{2,}/g, " "),
            Categories
          );
        }
      });

      options.appendChild(option);
    });
    selectCategories.addEventListener("click", (e) => {
      if (
        !(allOptions.some((opt) => e.target === opt) || e.target === options)
      ) {
        if (options.classList.contains("active")) {
          options.classList.remove("active");
          optionsSvg.classList.remove("active");
        } else {
          options.classList.add("active");
          optionsSvg.classList.add("active");
        }
      }
    });

    //Click for all options
    allOptions.forEach((option) => {
      option.addEventListener("click", () => {
        if (unlockOption || options.classList.contains("active")) {
          allOptions.forEach((option) => {
            option.classList.remove("active");
          });
          options.classList.remove("active");
          optionsSvg.classList.remove("active");
          option.classList.add("active");
          unlockOption = false;
        }
        setTimeout(() => {
          unlockOption = true;
        }, 300);
      });
    });
  }

  function addCardClickHandler() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const link = card.querySelector(".card-link").getAttribute("href");
        window.location.href = link;
      });
    });
  }

  function cardGenerate(card) {
    if (card.length < 0) return;
    const catalogCard = `
  <div
    class="card relative cursor-pointer flex flex-col bg-white rounded-[20px] pb-[22px] pt-[30px]"
  >
    <div
      class="absolute top-[14px] right-[11px] flex items-center gap-[5px] z-[2]"
    >
      <a href="${card.href}" class="card-link max-md:hidden" title="Подробнее">
        <img src="./img/catalog_page/note_!.svg" alt="!" />
      </a>
      <a href="" class="max-md:hidden" title="Скачать">
        <img
          src="./img/catalog_page/note_download.svg"
          alt="download note"
        />
      </a>
    </div>  
    <div class="flex flex-col items-start justify-start gap-7">
      <img
        src="./img/catalog_page/cards/${card.imgSrc}"
        alt="${card.title}"
        class="card-image object-cover w-full rounded-2xl"
      />
      <p class="card_description">
        ${card.title}
      </p>
    </div>
  </div>
  `;
    return catalogCard;
  }
  function GenerateCards(categoryListName, Categories) {
    if (Categories.length < 0) return;
    for (let i = 0; i < Categories.length; i++) {
      if (Categories[i].category === categoryListName) {
        const catalogCardHTML = cardGenerate(Categories[i]);
        containerCards.insertAdjacentHTML("beforeend", catalogCardHTML);
      }
    }
    addCardClickHandler();
  }
  const previousPagi = document.querySelector(".previous_pagination");
  const nextPagi = document.querySelector(".next_pagination");
  const countPagi = document.querySelectorAll(".count .pagination_item");

  countPagi[0].classList.add("active");

  if (countPagi[0].classList.contains("active")) {
    previousPagi.classList.add("noactive");
  }
  if (countPagi[countPagi.length - 1].classList.contains("active")) {
    nextPagi.classList.add("noactive");
  }
  previousPagi.addEventListener("click", function (event) {
    if (this.classList.contains("noactive")) {
      event.preventDefault(); // Предотвращаем переход по ссылке при активации класса "noactive"
    }
  });

  nextPagi.addEventListener("click", function (event) {
    if (this.classList.contains("noactive")) {
      event.preventDefault(); // Предотвращаем переход по ссылке при активации класса "noactive"
    }
  });
});
