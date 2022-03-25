const randomSelect = (selectedCarts) => {
  const random = Math.floor(Math.random() * selectedCarts.length);
  return selectedCarts[random];
};

export { randomSelect };
