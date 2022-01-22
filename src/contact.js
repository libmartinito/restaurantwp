import "./contact-style.css";

const createContactPage = () => {
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
  content.id = "contact-content";
  
  let header = make("div");
  addClass(header, "contact-header");
  
  let logo = make("div");
  addClass(logo, "contact-logo");
  
  let tabContainer = make("div");
  addClass(tabContainer, "contact-tab-container");
  
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

  let contactBody = make("div");
  addClass(contactBody, "contact-body");

  let title = make("div");
  addClass(title, "contact-title");
  title.textContent = "How can we help you?"

  let bodyOne = make("div");
  addClass(bodyOne, "contact-body-one");
  bodyOne.textContent = "Got a question, comment, or suggestion?";

  let bodyTwo = make("div");
  addClass(bodyTwo, "contact-body-two");
  bodyTwo.textContent = "You can email us your concerns at writeus@ph.mcd.com";

  let bodyThree = make("div");
  addClass(bodyThree, "contact-body-three");
  bodyThree.textContent = "You can also reach us at our socials below.";

  let socials = make("div");
  addClass(socials, "socials");

  let fbAnchor = make("a");
  fbAnchor.href = "https://web.facebook.com/McDo.ph/?_rdc=1&_rdr";

  let fb = make("div");
  addClass(fb, "fb");

  let instaAnchor = make("a");
  instaAnchor.href = "https://www.instagram.com/mcdo_ph/?hl=en";

  let insta = make("div");
  addClass(insta, "insta");

  let twitterAnchor = make("a");
  twitterAnchor.href = "https://twitter.com/McDo_PH";

  let twitter = make("div");
  addClass(twitter, "twitter");

  append(fbAnchor, fb);
  append(instaAnchor, insta);
  append(twitterAnchor, twitter);
  append(socials, fbAnchor);
  append(socials, instaAnchor);
  append(socials, twitterAnchor);

  append(contactBody, title);
  append(contactBody, bodyOne);
  append(contactBody, bodyTwo);
  append(contactBody, bodyThree);
  append(contactBody, socials);

  append(content, header);
  append(content, contactBody);

  let body = document.querySelector("body");
  body.prepend(content);
};

export {createContactPage};