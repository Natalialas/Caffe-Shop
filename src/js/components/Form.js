import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Form {
  constructor(element) {
    const thisForm = this;

    thisForm.render(element);
  }

  render(element){
    const thisForm = this;
        
    const generatedHTML = templates.contact();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);

    const formWrapper = document.querySelector(select.containerOf.contact);

    formWrapper.appendChild(generatedDom);

    thisForm.dom = {
      wrapper: element,
      form: element.querySelector(select.formContact.form),
    };

    thisForm.dom.inputs = {
      name: element.querySelector(select.formContact.name),
      title: element.querySelector(select.formContact.title),
      message: element.querySelector(select.formContact.message),
    };
  }
}

export default Form;