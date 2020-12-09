import './category.scss';
import Cards from '../cards/cards'

class Category {
    constructor(name) {
        this.name = name;
        //this.callBack = callBack;
    }

    getHtmlElement() {
        const element = document.createElement('div');
        const elementClass = 'category';
        element.className = elementClass;
        this.element = element;
        element.innerHTML = `
            <h2>${this.name}</2h>
            <img class = '${elementClass}__image' src = ''>
        `
        return element;
    }

}

export default Category;