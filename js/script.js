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

  clonedLabels.forEach((label, index) => {
    const text = "Activity #" + (index + 1);
    label.innerHTML = `<label><input class='grid__aside-input' type='radio'>${text}</label>`;
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

const dateText = document.querySelector(".grid__aside-txt--date"); 

function currentDateModifier(element) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
  const modifiedDate = `${day} ${month}`;

  element.textContent = modifiedDate;
}

currentDateModifier(dateText);

const timeText = document.querySelector(".grid__aside-txt--time");

function modifyTimeFormat(number) {
  return number < 10 ? `0${number}` : number;
}

function currentTimeModifier(element) {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = modifyTimeFormat(currentTime.getMinutes());
  element.innerHTML = `${hours} <span class="grid__aside-txt--ticking">:</span> ${minutes}`;
}

currentTimeModifier(timeText);