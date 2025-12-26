const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burgerIcon = "./assets/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
  const closeIcon = "./assets/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
  console.log(navLinks);
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      burger.innerHTML = `<img  src="${closeIcon}" alt="">`;
    } else {
      burger.innerHTML = `<img  src="${burgerIcon}" alt="">`;
    }
    
  });
};
navSlide();
