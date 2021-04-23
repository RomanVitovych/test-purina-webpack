import TemplateProduct from '../templates/product-item.hbs';
import data from '../product.json';

const markup = TemplateProduct(data);

const prodList = document.querySelector('.js-product-list');
prodList.insertAdjacentHTML('beforeend', markup);