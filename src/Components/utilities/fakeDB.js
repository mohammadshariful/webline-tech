const addToDb = (id) => {
  const storeCart = localStorage.getItem("shoppingCart");
  let shoppingCart;
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  } else {
    shoppingCart = {};
  }
  const qunantity = shoppingCart[id];
  if (qunantity) {
    shoppingCart[id] = qunantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

const getItem = () => {
  const storeCart = localStorage.getItem("shoppingCart");
  let shoppingCart;
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  } else {
    shoppingCart = {};
  }
  return shoppingCart;
};

const deleteProduct = (id) => {
  const storeCart = localStorage.getItem("shoppingCart");
  if (storeCart) {
    const shoppingCart = JSON.parse(storeCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }
};

const removeCart = () => {
  localStorage.removeItem("shoppingCart");
};

export { addToDb, getItem, removeCart, deleteProduct };
