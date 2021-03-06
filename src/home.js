import "./home-style.css";

const createHomePage = () => {
  let content = document.createElement("div");
  content.id = "home-content";

  let header = document.createElement("div");
  header.classList.add("home-header");
  
  let logo = document.createElement("div");
  logo.classList.add("home-logo");
  
  let tabContainer = document.createElement("div");
  tabContainer.classList.add("home-tab-container");
  
  let tabOne = document.createElement("div");
  tabOne.classList.add("tab-one");
  tabOne.textContent = "Home";
  
  let tabTwo = document.createElement("div");
  tabTwo.classList.add("tab-two");
  tabTwo.textContent = "Menu";
  
  let tabThree = document.createElement("div");
  tabThree.classList.add("tab-three");
  tabThree.textContent = "Contact";
  
  tabContainer.appendChild(tabOne);
  tabContainer.appendChild(tabTwo);
  tabContainer.appendChild(tabThree);
  
  header.appendChild(logo);
  header.appendChild(tabContainer);
  
  let hero = document.createElement("div");
  hero.classList.add("home-hero");
  
  let lineOne = document.createElement("div");
  lineOne.classList.add("home-line-one");
  lineOne.textContent = "Hungry?";
  
  let lineTwo = document.createElement("div");
  lineTwo.classList.add("home-line-two");
  lineTwo.textContent = "We got you fam.";
  
  let lineThree = document.createElement("div");
  lineThree.classList.add("home-line-three");
  lineThree.textContent = "McDonalds's has been serving to happy customers since 1940. We specialize in burgers. We use only a hundred percent pure beef with no additives, preservatives or flavor enhancers. Our vegetables are also natural and sourced from the cold mountains of Bukidnon and Baguio. Our buns are baked locally and delivered fresh regularly to guarantee taste and freshness.";
  
  hero.appendChild(lineOne);
  hero.appendChild(lineTwo);
  hero.appendChild(lineThree);
  
  content.appendChild(header);
  content.appendChild(hero);

  let body = document.querySelector("body");
  body.prepend(content);
};

export{createHomePage};




