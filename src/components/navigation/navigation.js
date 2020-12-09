import "./navigation.scss";

class Navigation {
  constructor(parrentBlock, barBlock, pathPrefix) {
    this.parrentBlock = parrentBlock;
    this.barBlock = barBlock;
    this.pathPrefix = pathPrefix;
  }

  init() {
    this.setNav();
    this.addOpenButton();
    this.addCloseButton();
  }

  setNav() {
    const nav = document.createElement("nav");
    this.navElement = nav;
    nav.className = "nav";
    this.parrentBlock.prepend(nav);
  }

  addItem(name) {
    const navItem = document.createElement("div");
    navItem.className = "nav__item";
    navItem.innerHTML = `
            ${name}
        `;
    navItem.dataset.nav = name;
    this.navElement.append(navItem);
    return navItem;
  }

  addOpenButton() {
    const openButton = this.getButtonHtml("open");
    openButton.addEventListener("click", () => {
      this.openNav();
    });
    this.barBlock.append(openButton);
  }

  addCloseButton() {
    const closeButton = this.getButtonHtml("close");
    console.log(closeButton);
    closeButton.addEventListener("click", () => {
      this.closeNav();
    });
    this.navElement.append(closeButton);
  }

  getButtonHtml(name) {
    const button = document.createElement("div");
    button.className = `nav__${name}`;
    button.innerHTML = `
            <img class = 'nav__${name}-image' src = '${this.pathPrefix}/assets/${name}.svg'>
        `;
    return button;
  }

  openNav() {
    this.navElement.classList.add("open");
  }

  closeNav() {
    this.navElement.classList.remove("open");
  }
}

export default Navigation;
