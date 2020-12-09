import Category from "../category/category";
import data from "../../data";
import Cards from "../cards/cards";
import Navigation from "../navigation/navigation";

class MainField {
  constructor(appBlock, mainBlock, barBlock) {
    this.appBlock = appBlock;
    this.mainBlock = mainBlock;
    this.barBlock = barBlock;
    this.navBlock = new Navigation(
      this.appBlock,
      this.barBlock,
      "../src/components/navigation"
    );
  }

  init() {
    /* [this.navBlock, this.mainBlock, this.barBlock].forEach((block)=>{
        block.innerHTML = '';
    }); */
    this.navBlock.init();
    this.setCategoryElements();
    this.setNavElements();
  }

  setNavElements() {
    this.setNavItems("main", () => {
      this.setCategoryElements();
    });
    for (let key in data) {
      this.setNavItems(key, () => {
        this.setCardElements(data[key]);
      });
    }
  }

  setNavItems(itemName, eventAction) {
    const navItem = this.navBlock.addItem(itemName);
    navItem.addEventListener("click", () => {
      eventAction();
    });
  }

  setCategoryElements() {
    this.mainBlock.innerHTML = "";
    const categoryElements = document.createDocumentFragment();
    for (let key in data) {
      const category = new Category(key).getHtmlElement();
      category.addEventListener("click", () => {
        this.setCardElements(data[key]);
      });
      categoryElements.append(category);
    }
    this.mainBlock.append(categoryElements);
  }

  setCardElements(cardsData) {
    const cardElements = new Cards(cardsData).getCardListHtml();
    this.mainBlock.innerHTML = "";
    this.mainBlock.append(cardElements);
  }
}

export default MainField;
