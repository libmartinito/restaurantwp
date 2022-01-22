import "./menu-style.css";
import quarterPounder from "../src/images/quarterPounder.jpeg";
import mcChickenSandwich from "../src/images/mcChickenSandwich.jpeg";
import mcCrispyChickenSandwich from "../src/images/mcCrispyChickenSandwich.jpeg";
import bigMac from "../src/images/bigMac.jpeg";
import burgerMcdo from "../src/images/burgerMcdo.jpeg";
import cheeseburger from "../src/images/cheeseburger.jpeg";
import cheeseburgerDeluxe from "../src/images/cheeseburgerDeluxe.jpeg";
import cheesyBurgerMcdo from "../src/images/cheesyBurgerMcdo.jpeg";

const createMenuPage = () => {
  let make = (elem) => {
    return document.createElement(elem);
  };
  
  let addClass = (elem, str) => {
    elem.classList.add(str);
  };
  
  let append = (parent, child) => {
    parent.appendChild(child);
  };

  let content = make("div");
  content.id = "menu-content";
  
  let header = make("div");
  addClass(header, "menu-header");
  
  let logo = make("div");
  addClass(logo, "menu-logo");
  
  let tabContainer = make("div");
  addClass(tabContainer, "menu-tab-container");
  
  let tabOne = make("div");
  addClass(tabOne, "tab-one");
  tabOne.textContent = "Home";
  
  let tabTwo = make("div");
  addClass(tabTwo, "tab-two");
  tabTwo.textContent = "Menu";
  
  let tabThree = make("div");
  addClass(tabThree, "tab-three");
  tabThree.textContent = "Contact";
  
  append(tabContainer, tabOne);
  append(tabContainer, tabTwo);
  append(tabContainer, tabThree);
  append(header, logo);
  append(header, tabContainer);
  
  let menuContainer = make("div");
  addClass(menuContainer, "menu-container");
  
  let menu = make("div");
  addClass(menu, "menu");
  
  let menuItems = make("ul");
  
  let menuItemsArr = ["Quarter Pounder", "McChicken Sandwich", "McCrispy Chicken Sandwich", "Big Mac", "Burger McDo", "Cheeseburger", "Cheeseburger Deluxe", "Cheesy Burger McDo"];
  
  menuItemsArr.forEach(menuItem => {
    let item = make("li");
    item.textContent = menuItem;
    append(menuItems, item);
  });

  append(menu, menuItems);
  
  let imgDesc = make("div");
  addClass(imgDesc, "img-description");
  
  let img = make("div");
  addClass(img, "img");
  
  let desc = make("div");
  addClass(desc, "description");
  
  let title = make("div");
  addClass(title, "title");
  
  let descBody = make("div");
  addClass(descBody, "desc-body");
  
  append(desc, title);
  append(desc, descBody);
  append(imgDesc, img);
  append(imgDesc, desc);
  append(menuContainer, menu);
  append(menuContainer, imgDesc);
  
  append(content, header);
  append(content, menuContainer);

  let body = document.querySelector("body");
  body.prepend(content);

  let listItems = document.querySelectorAll("li");
listItems.forEach(listItem => {
  listItem.addEventListener("click", (e) => {
    updateImgDesc(e.target);
  });
});

let updateImgDesc = function(target) {
  let textContent = target.textContent;
  let img = document.querySelector(".img");
  let title = document.querySelector(".title");
  let desc = document.querySelector(".desc-body");

  switch(textContent) {
    case "Quarter Pounder":
      img.style.backgroundImage = `url(${quarterPounder})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Quarter Pounder";
      desc.textContent = "Features a 1/4 lb. of 100% fresh beef seasoned with a pinch of salt and pepper, and topped with silvered onions, tangy pickles, and two slices of melty cheese on a sesame seed bun.";
      break;
    case "McChicken Sandwich":
      img.style.backgroundImage = `url(${mcChickenSandwich})`;
      img.style.backgroundSize = "cover";
      title.textContent = "McChicken Sandwich";
      desc.textContent = "Served on a perfectly toasty bun, with crisply chicken fillet topped with mayonnaise and shredded iceberg lettuce.";
      break;
    case "McCrispy Chicken Sandwich":
      img.style.backgroundImage = `url(${mcCrispyChickenSandwich})`;
      img.style.backgroundSize = "cover";
      title.textContent = "McCrispy Chicken Sandwich";
      desc.textContent = "Made of a juicy chicken patty topped with creamy mayo, sandwiched in a soft tasty bun.";
      break;
    case "Big Mac":
      img.style.backgroundImage = `url(${bigMac})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Big Mac";
      desc.textContent = "A double layer of sear-sizzled, juicy 100% pure beef mingled with special sauce on a sesame seed bun and topped with melty American cheese, crisp lettuce, minced onions, and crisp dill pickles.";
      break;
    case "Burger McDo":
      img.style.backgroundImage = `url(${burgerMcdo})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Burger McDo";
      desc.textContent = "Our all-time classic burger made even better. Now with a beefier patty and a sweeter, tastier sauce.";
      break;
    case "Cheeseburger":
      img.style.backgroundImage = `url(${cheeseburger})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Cheeseburger";
      desc.textContent = "100% pure beef patty seasoned with a pinch of salt and pepper, topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese on perfectly toasted buns.";
      break;
    case "Cheeseburger Deluxe":
      img.style.backgroundImage = `url(${cheeseburgerDeluxe})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Cheeseburger Deluxe";
      desc.textContent = "It's the classic cheeseburger you love, made even more tasty with tomato, lettuce, and mayo for a deluxe kick, on perfectly toasty buns.";
      break;
    case "Cheesy Burger McDo":
      img.style.backgroundImage = `url(${cheesyBurgerMcdo})`;
      img.style.backgroundSize = "cover";
      title.textContent = "Cheesy Burger McDo";
      desc.textContent = "Classic savory Burger McDo plus a slice of creamy American cheese and sweet, tangy sauce.";
      break;
  }

}
};
export {createMenuPage};


