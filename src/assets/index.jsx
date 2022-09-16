function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(require.context("./img/products", false, /\.(png|jpe?g|svg|gif)$/));
export { images };
