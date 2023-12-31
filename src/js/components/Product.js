import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;

    thisProduct.render(data);
  }

  render(data){
    const thisProduct = this;

    const generatedHTML = templates.products({products: data});
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const generatedDomHome = utils.createDOMFromHTML(generatedHTML);

    const productWrapper = document.querySelector(select.containerOf.products);
    const homeProductWrapper = document.querySelector(select.home.productsHome);
    
    productWrapper.appendChild(generatedDom);
    homeProductWrapper.prepend(generatedDomHome);

    thisProduct.dom = {};
  }
}

export default Product;