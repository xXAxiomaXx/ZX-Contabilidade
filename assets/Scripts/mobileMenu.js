const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".navigation-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("fixed");
  mobileMenu.classList.toggle("top-14");
  mobileMenu.classList.toggle("bg-[#080e26]");
});

function closeNavigationMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("fixed", "top-14", "bg-[#080e26]");
}

// Adiciona evento de clique a todos os links do menu
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavigationMenu();
  });
});

// Adiciona evento de clique ao documento para fechar o menu ao clicar fora
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    closeNavigationMenu();
  }
});