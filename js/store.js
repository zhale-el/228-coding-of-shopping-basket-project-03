let allProducts = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];

const shopItemsContainer = document.querySelector(".shop-items");
const basketProductsContainer = document.querySelector(".cart-items");
let userBasket = [];

allProducts.forEach(function (product) {
  let productContainer = document.createElement("div");
  productContainer.classList.add("shop-itme");

  let productTitleSpan = document.createElement("span");
  productTitleSpan.classList.add("shop-item-title");
  productTitleSpan.innerHTML = product.title;

  let productImageElem = document.createElement("img");
  productImageElem.classList.add("shop-item-image");
  productImageElem.setAttribute("src", product.img);

  let productDetailContainer = document.createElement("div");
  productDetailContainer.classList.add("shop-item-details");

  let productPriceSpan = document.createElement("span");
  productPriceSpan.innerHTML = product.price;
  productPriceSpan.classList.add("shop-item-price");

  let productAddBtn = document.createElement("button");
  productAddBtn.innerHTML = "Add to cart";
  productAddBtn.className = "btn btn-primary shop-item-button";
  productAddBtn.addEventListener("click", function () {
    addProductBasketArray(product.id);
  });

  productDetailContainer.append(productPriceSpan, productAddBtn);
  productContainer.append(
    productTitleSpan,
    productImageElem,
    productDetailContainer
  );
  shopItemsContainer.append(productContainer);
});

function addProductBasketArray(productId) {
  let mainProduct = allProducts.find(function (product) {
    return product.id === productId;
  });

  userBasket.push(mainProduct);
  basketProductsGenerator(userBasket);
  console.log(userBasket);
}
function basketProductsGenerator(userBasketArray) {
  basketProductsContainer.innerHTML = "";
  userBasketArray.forEach(function (product) {
    let basketProductContainer = document.createElement("div");
    basketProductContainer.classList.add("cart-row");

    let basketProductDetailsContainer = document.createElement("div");
    basketProductDetailsContainer.className = "cart-item cart-column";

    let basketProductImg = document.createElement("img");
    basketProductImg.setAttribute("src", product.img);
    basketProductImg.setAttribute("width", "100");
    basketProductImg.setAttribute("height", "100");
    basketProductImg.classList.add("cart-item-image");

    let basketProductTitlesSpan = document.createElement("span");
    basketProductTitlesSpan.classList.add("cart-item-title");
    basketProductTitlesSpan.innerHTML = product.title;

    basketProductDetailsContainer.append(
      basketProductImg,
      basketProductTitlesSpan
    );

    let basketProductPriceSpan = document.createElement("span");
    basketProductPriceSpan.className = "cart-price cart-column";
    basketProductPriceSpan.innerHTML = product.price;

    let basketProductInputContainer = document.createElement("div");
    basketProductInputContainer.className = "cart-quantity cart-column";

    let basketProductInput = document.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = "1";
    basketProductInput.setAttribute("type", "number");

    let basketProductRemoveBtn = document.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "Remove";

    basketProductInputContainer.append(
      basketProductInput,
      basketProductRemoveBtn
    );
    basketProductContainer.append(
      basketProductDetailsContainer,
      basketProductPriceSpan,
      basketProductInputContainer
    );
    basketProductsContainer.append(basketProductContainer);
    console.log(basketProductContainer);
  });
}
