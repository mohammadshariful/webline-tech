const errorMsg = (arr) => {
  let already;
  if (arr.length > 4) {
    alert("You have already four product selected");
    already = false;
  } else {
    already = true;
  }
  return already;
};

export { errorMsg };
