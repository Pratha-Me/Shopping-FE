import AxiosService from '../api/AxiosService';

const getCatAndSubCat = () => {
  return AxiosService.login.get('/inventory/getAllCatAndSubCat');
};

const getProducts = (query) => {
  return AxiosService.login.get('/inventory/itemsList?' + query);
};
const getItemList = (id) => {
  return AxiosService.app.get(`/inventory/itemsListByProductId?productId=${id}`);
};

const postCart = (data) => {
  return AxiosService.app.post('/inventory/user/cart', data);
};

const getUserCart = () => {
  return AxiosService.app.get('/inventory/user/cart');
};

const removeCartItem = (id) => {
  return AxiosService.app.delete(`/inventory/user/cart?itemId=${id}`);
};
const removeWishItem = (id) => {
  return AxiosService.app.delete(`/inventory/user/wish?itemId=${id}`);
};
const clearCart = () => {
  return AxiosService.app.put('/inventory/user/cart');
};
const postWishlist = (data) => {
  return AxiosService.app.post('/inventory/user/wish', data);
};
const getWishlist = () => {
  return AxiosService.app.get('/inventory/user/wish');
};
const saveOrder = (data) => {
  return AxiosService.app.post('/orders/saveAnOrder', data);
};

const getCarousel = () => {
  return AxiosService.app.get('/inventory/ad');
};
const getProductList = () => {
  return AxiosService.login.get('/inventory/allProduct');
};
const getAllItemList = () => {
  return AxiosService.login.get('/inventory/allItem');
};

function postEsewa(path, params) {
  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('action', path);

  for (var key in params) {
    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', key);
    hiddenField.setAttribute('value', params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
}
// function esewaVerification(path, params) {
//   console.log('ESEWA params :', params);
//   var form = document.createElement('form');
//   form.setAttribute('method', 'POST');
//   // form.setAttribute('target', '_blank');
//   form.setAttribute('action', path);

//   for (var key in params) {
//     var hiddenField = document.createElement('input');
//     hiddenField.setAttribute('type', 'hidden');
//     hiddenField.setAttribute('name', key);
//     hiddenField.setAttribute('value', params[key]);
//     form.appendChild(hiddenField);
//   }

//   document.body.appendChild(form);
//   form.submit();
// }

const esewaVerification = (path, params) => {
  console.log('path', path);
  console.log('params', params);
  AxiosService.login.get(path, params).then((response) => {
    console.log('Verfication REsponse ', response);
  });
};

export {
  getCatAndSubCat,
  getProducts,
  postCart,
  getUserCart,
  postWishlist,
  getWishlist,
  saveOrder,
  removeCartItem,
  removeWishItem,
  clearCart,
  postEsewa,
  getCarousel,
  esewaVerification,
  getProductList,
  getItemList,
  getAllItemList,
};
