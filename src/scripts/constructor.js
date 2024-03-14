document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("menu_cabel");
  const searchIcon = document.querySelector("svg .icon_search");

  searchInput.addEventListener("focus", () => {
    searchIcon.style.fill = "#e31e24";
    searchInput.classList.add("focus");
  });
  searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
      searchIcon.style.fill = "";
      searchInput.classList.remove("focus");
    }
  });
  searchIcon.addEventListener("click", function () {
    searchInput.focus();
  });

  const dropDowns = Array.from(document.querySelectorAll(".constructor_down"));
  let unlockToChange = true;
  document.addEventListener("click", (e) => {
    const isOutsideDropDowns = !dropDowns.some((dropDown) =>
      dropDown.contains(e.target)
    );

    if (isOutsideDropDowns) {
      console.log("outside");
      dropDowns.forEach((el) => {
        const optionsContainerClose = el.querySelector(".options");
        const dropDownClose = el.querySelector(".drop_down");
        const iconDownClose = el.querySelector(".arrow_down");
        const currentOption = dropDownClose.querySelector(".current_option");
        if (currentOption.textContent.trim() !== "Выберите вариант") {
          optionsContainerClose.classList.remove("active");
          iconDownClose.classList.remove("active");
        } else {
          console.log("not chaged");
          dropDownClose.classList.remove("active");
          optionsContainerClose.classList.remove("active");
          iconDownClose.classList.remove("active");
          iconDownClose.classList.remove("active_color");
        }
      });
    }
  });

  dropDowns.forEach((el) => {
    let isChanged = false;
    const dropDown = el.querySelector(".drop_down");
    const iconDown = el.querySelector(".arrow_down");
    const currentOption = dropDown.querySelector(".current_option");
    const optionsContainer = dropDown.querySelector(".options");
    const option = Array.from(optionsContainer.querySelectorAll(".option"));

    dropDown.addEventListener("click", (e) => {
      if (
        !(
          e.target === optionsContainer ||
          option.some((opt) => e.target === opt)
        )
      ) {
        if (optionsContainer.classList.contains("active") && !isChanged) {
          dropDown.classList.remove("active");
          optionsContainer.classList.remove("active");
          iconDown.classList.remove("active");
          iconDown.classList.remove("active_color");
        } else {
          dropDowns.forEach((closeEl) => {
            const dropDownClose = closeEl.querySelector(".drop_down");
            const optionsContainerClose = closeEl.querySelector(".options");
            const iconDownClose = closeEl.querySelector(".arrow_down");
            if (
              dropDownClose
                .querySelector(".current_option")
                .textContent.trim() !== "Выберите вариант"
            ) {
              optionsContainerClose.classList.remove("active");
              iconDownClose.classList.remove("active");
            } else {
              dropDownClose.classList.remove("active");
              optionsContainerClose.classList.remove("active");
              iconDownClose.classList.remove("active");
              iconDownClose.classList.remove("active_color");
            }
          });
          dropDown.classList.add("active");
          optionsContainer.classList.add("active");
          iconDown.classList.add("active");
          iconDown.classList.add("active_color");
        }
      }
    });

    option.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (unlockToChange) {
          const optionsContainer = opt.parentElement;
          option.forEach((op) => {
            op.classList.remove("active");
          });
          isChanged = true;
          currentOption.textContent = "";
          currentOption.textContent = opt.textContent;
          opt.classList.add("active");
          optionsContainer.classList.remove("active");
          iconDown.classList.remove("active");
          unlockToChange = false;
        }
        setTimeout(() => {
          unlockToChange = true;
        }, 200);
      });
    });
  });
});
