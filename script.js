const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsproducts")) || [];

const addProduct = (
  productNameValue,
  productImageValue,
  productPriceValue,
  productTextValue
) => {
  products.push({
    image: productImageValue,
    price: productPriceValue,
    name: productNameValue,
    text: productTextValue,
  });
  // add product local storage
  localStorage.setItem("lsproducts", JSON.stringify(products));
};

// task 0ne
const createElement = (
  productNameValue,
  productImageValue,
  productPriceValue,
  productTextValue
) => {
  // product colon
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");
  // single product div
  const singleProductDiv = document.createElement("div");
  singleProductDiv.classList.add("single-product");
  // single product Image
  const singleProductImage = document.createElement("img");
  singleProductImage.setAttribute("src", productImageValue);
  // single product price
  const singleProductPrice = document.createElement("h5");
  singleProductPrice.innerText = productPriceValue;

  // single product Name
  const singleProductName = document.createElement("h3");
  singleProductName.innerText = productNameValue;
  // single product text
  const singleProductText = document.createElement("p");
  singleProductText.innerText = productTextValue;

  singleProductDiv.append(
    singleProductImage,
    singleProductPrice,
    singleProductName,
    singleProductText
  );

  productCol.appendChild(singleProductDiv);

  allProductDiv.appendChild(productCol);
  console.log(allProductDiv);
};

// main click function
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const productNameValue = productNameInput.value;
  const productImageValue = productImageInput.value;
  const productPriceValue = productPriceInput.value;
  const productTextValue = productTextInput.value;

  // task one
  createElement(
    productNameValue,
    productImageValue,
    productPriceValue,
    productTextValue
  );
  //   task 2
  addProduct(
    productNameValue,
    productImageValue,
    productPriceValue,
    productTextValue
  );
if (
    productNameValue &&
    productImageValue &&
    productPriceValue &&
    productTextValue
  ) {
    productNameInput.value = "";
    productTextInput.value = "";
    productPriceInput.value = "";
    productImageInput.value = "";
  }else {
    errorData.innerHTML = "<p>Please Add Some Task !</p>";
  }
});
// task 3
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
