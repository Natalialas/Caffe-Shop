export const select = {
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    contact: '#template-contact',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '.products-wrapper',
    contact: '.contact-wrapper',
  },
  nav: {
    links: '.navigation a',
  },
  home: {
    productsHome: '.home-products',
  },
  formContact: {
    form: '.send-form',
    name: '[name="name"]',
    title: '[name="title"]',
    message: '[name="message"]',
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
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};