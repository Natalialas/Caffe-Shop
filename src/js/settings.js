export const select = {
  templateOf: {
    
  },
  containerOf: {
    pages: '#pages',
  },
  nav: {
    links: '.navigation a',
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
//   products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};