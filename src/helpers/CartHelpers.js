export const addItem = (item, next) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({
      ...item,
      count: 1,
      total: 0,
    });

    // Remove Duplicates
    // Build an Array from new Set and Turn it back into array using Array.from
    // so that later we can re-map it
    // new set will only allow unique values in it
    // so pass the ids of each object/product
    // If the loop tries to add the same value again, it will get ignored
    // ... with the array of ids we got on when first map() was used
    // run map() on it again and return the actual product from the cart

    cart = Array.from(new Set(cart.map((p) => p.id))).map((id) => {
      return cart.find((p) => p.id === id);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};

export const addItemUser = (cart) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
};

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return 0;
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
  return [];
};

export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.map((product, i) => {
      if (product.id === productId) {
        cart[i].count = count;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const updateTotal = (productId, total) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.map((product, i) => {
      if (product.id === productId) {
        cart[i].total = total;
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const removeItem = (productId) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.map((product, i) => {
      if (product.id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return cart;
};

// Get Subtotal
export const getSubTotal = (items) => {
  return items.reduce((currentValue, nextValue) => {
    return currentValue + nextValue.count * nextValue.unitPrice;
  }, 0);
};
