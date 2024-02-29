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
    title: "ВВГнг(А), АВВГнг(А), ВВГЭнг(А), АВВГЭнг(А), ВБШвнг(А), АВБШвнг(А)",
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
      <a href="${card.href}" class="card-link">
        <img src="./img/catalog_page/note_!.png" alt="!" />
      </a>
      <a href="">
        <img
          src="./img/catalog_page/note_download.png"
          alt="download note"
        />
      </a>
    </div>  
    <div class="flex flex-col items-start justify-start gap-7">
      <img
        src="./img/catalog_page/cards/${card.imgSrc}"
        alt="${card.title}"
        class="object-cover w-full rounded-2xl"
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