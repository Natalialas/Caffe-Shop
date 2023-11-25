export const select = {
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    form: '#template-form',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    form: '.form-wrapper',
  },
  nav: {
    links: '.navigation a',
  },
  home: {
    productsHome: '.home-products',
  },
};
  
export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};
  
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    form: 'form',
  },
};
  
export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
  home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};