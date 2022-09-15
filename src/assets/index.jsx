function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const Images = importAll(require.context("./img", false, /\.(png|jpe?g|svg|gif)$/));
export { Images };
