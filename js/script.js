const tasksContainer = document.querySelector(".info-bubble:has(form)");

function cloneAndModifyInnerContent(container) {
  const clonedElement = document.createElement("section");
  const clonedElementContent = Array.from(container.children);

  clonedElementContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    clonedElement.appendChild(duplicatedItem);
  });

  clonedElement.classList.add("info-bubble--before");
  container.appendChild(clonedElement);

  const clonedWrapper = clonedElement.children[0];
  const clonedTitle = clonedWrapper.children[0];
  clonedTitle.innerText = "Front end";
  clonedTitle.style.backgroundColor = "var(--green)";
  clonedTitle.style.color = "var(--black)";

  const clonedForm = clonedElement.children[1];
  const clonedLabels = Array.from(clonedForm.children);
  clonedLabels.forEach((element) => {
    const inputs = Array.from(element.children);
    console.log(inputs.innerHTML);
  });
}

cloneAndModifyInnerContent(tasksContainer);

function scrollerAnimation() {
  const scrollerInner = document.querySelector(".scroller__inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  })
}

scrollerAnimation();

const smallMediaQueryViewport = window.matchMedia("(max-width: 60em)");
const menuIcon = document.querySelector(".header__menu-icon");

const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  document.body.appendChild(menu);

  return menu;
}

if (smallMediaQueryViewport.matches) {
  const menu = createMenu();
  toggleClasses(menuIcon, menu, "menu--toggle");
  toggleClasses(menuIcon, menuIcon, "header__menu-icon--toggle")

  const menuNavList = createNavList([
    "Log In",
    "Products",
    "Key Features",
    "Why Us",
    "Applications",
    "Careers",
    "Pricing",
  ]);
  console.log(menuNavList);

  menu.appendChild(menuNavList);
}

function toggleClasses(element, target, toggleClass) {
  element.addEventListener("click", () => {
    if (!target.classList.contains(toggleClass)) {
      target.classList.add(toggleClass);
      target.setAttribute("src", "img/x-icon.svg");
    } else if (target.classList.contains(toggleClass)) {
      target.classList.remove(toggleClass);
      target.setAttribute("src", "img/menu.svg");
    }
  });
}

function createNavList(listItems) {
  const list = document.createElement("ul");
  list.classList.add("menu__list");

  listItems.forEach((itemText) => {
  const item = document.createElement("li");
  item.classList.add("menu__list-item");

  const link = document.createElement("a");
  link.setAttribute("href", "#");
  link.classList.add("menu__list-link");
  link.textContent = itemText;

  item.appendChild(link);
  list.appendChild(item);
  });

  return list;
}
