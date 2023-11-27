import { settings, classNames, select } from './settings.js';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Form from './components/Form.js';

const app = {
  initData: function() {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;


    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse;
        thisApp.initProducts(); 
      });
    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  initPages: function(){
    const thisApp = this;
    
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id; 

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page ifd from href attribute  */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    } 
  }, 

  activatePage: function(pageId){
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initProducts: function () {
    const thisApp = this;

    new Product(thisApp.data.products);
    
    console.log('thisApp.data.products', thisApp.data.products);
  },

  initHome: function () {
    const thisApp = this;

    thisApp.homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(thisApp.homeElem);
  },

  initForm: function(){
    const thisApp = this;
    thisApp.formElem = document.querySelector(select.containerOf.contact);
    thisApp.form = new Form(thisApp.formElem);
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
    thisApp.initForm();
  },
};

app.init();