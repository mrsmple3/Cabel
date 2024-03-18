document.addEventListener("DOMContentLoaded", function () {
  const formBlock = document.querySelector(".form");
  const formBlockOffsetTop = formBlock.offsetTop;
  //right to form Block
  const fromBlockBoundingRect = formBlock.getBoundingClientRect();
  const fromBlockOffsetRight = window.innerWidth - fromBlockBoundingRect.right;
  formBlock.style.right = fromBlockOffsetRight - 14 + "px";
  const blockHeight = formBlock.offsetHeight;
  const contactContent = document.querySelector(".contacts").offsetHeight + 83;
  const location = document.querySelector(".location").offsetHeight;
  const bottomLimit = contactContent - blockHeight - location;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= formBlockOffsetTop - 83) {
      if (scrollTop >= bottomLimit - 55 - 83) {
        formBlock.style.position = "absolute";
        formBlock.style.top = bottomLimit - 55 + "px";
      } else {
        formBlock.style.position = "fixed";
        formBlock.style.top = 83 + "px";
      }
    } else {
      formBlock.style.position = "static";
    }
  });
});
