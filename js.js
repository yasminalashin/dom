const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

cart.addEventListener("click", () => {
  if (cartModalOverlay.style.transform === "translateX(-200%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

var toggle = [];
for (let i = 0; i < 25; i++) {
  toggle.push(document.getElementById(`icon${i + 1}`));
}
console.log(toggle);

// for (let i = 0; i < icon_button.length; i++) {
//   var i_button = icon_button[i];
//   i_button.addEventListener("click", Toggle);
// }
function Toggle(id) {
  switch (id) {
    case 0:
      {
        if (toggle[0].style.color == "black") {
          toggle[0].style.color = "red";
        } else {
          toggle[0].style.color = "black";
        }
      }
      break;
    case 1:
      {
        if (toggle[1].style.color == "black") {
          toggle[1].style.color = "red";
        } else {
          toggle[1].style.color = "black";
        }
      }
      break;

    case 2:
      {
        if (toggle[2].style.color == "black") {
          toggle[2].style.color = "red";
        } else {
          toggle[2].style.color = "black";
        }
      }
      break;
    case 3:
      {
        if (toggle[3].style.color == "black") {
          toggle[3].style.color = "red";
        } else {
          toggle[3].style.color = "black";
        }
      }
      break;
    case 4:
      {
        if (toggle[4].style.color == "black") {
          toggle[4].style.color = "red";
        } else {
          toggle[4].style.color = "black";
        }
      }
      break;
    case 5:
      {
        if (toggle[5].style.color == "black") {
          toggle[5].style.color = "red";
        } else {
          toggle[6].style.color = "black";
        }
      }
      break;
    case 6:
      {
        if (toggle[6].style.color == "black") {
          toggle[6].style.color = "red";
        } else {
          toggle[6].style.color = "black";
        }
      }
      break;
    case 7:
      {
        if (toggle[7].style.color == "black") {
          toggle[7].style.color = "red";
        } else {
          toggle[7].style.color = "black";
        }
      }
      break;
    case 8:
      {
        if (toggle[8].style.color == "black") {
          toggle[8].style.color = "red";
        } else {
          toggle[8].style.color = "black";
        }
      }
      break;
    case 9:
      {
        if (toggle[9].style.color == "black") {
          toggle[9].style.color = "red";
        } else {
          toggle[9].style.color = "black";
        }
      }
      break;
    case 10:
      {
        if (toggle[10].style.color == "black") {
          toggle[10].style.color = "red";
        } else {
          toggle[10].style.color = "black";
        }
      }
      break;
    case 11:
      {
        if (toggle[11].style.color == "black") {
          toggle[11].style.color = "red";
        } else {
          toggle[11].style.color = "black";
        }
      }
      break;
    case 12:
      {
        if (toggle[12].style.color == "black") {
          toggle[12].style.color = "red";
        } else {
          toggle[12].style.color = "black";
        }
      }
      break;
    case 13:
      {
        if (toggle[13].style.color == "black") {
          toggle[13].style.color = "red";
        } else {
          toggle[13].style.color = "black";
        }
      }
      break;
    case 14:
      {
        if (toggle[14].style.color == "black") {
          toggle[14].style.color = "red";
        } else {
          toggle[14].style.color = "black";
        }
      }
      break;
    case 15:
      {
        if (toggle[15].style.color == "black") {
          toggle[15].style.color = "red";
        } else {
          toggle[15].style.color = "black";
        }
      }
      break;
    case 16:
      {
        if (toggle[16].style.color == "black") {
          toggle[16].style.color = "red";
        } else {
          toggle[16].style.color = "black";
        }
      }
      break;
    case 17:
      {
        if (toggle[17].style.color == "black") {
          toggle[17].style.color = "red";
        } else {
          toggle[17].style.color = "black";
        }
      }
      break;
    case 18:
      {
        if (toggle[18].style.color == "black") {
          toggle[18].style.color = "red";
        } else {
          toggle[18].style.color = "black";
        }
      }
      break;
    case 19:
      {
        if (toggle[19].style.color == "black") {
          toggle[19].style.color = "red";
        } else {
          toggle[19].style.color = "black";
        }
      }
      break;
    case 20:
      {
        if (toggle[20].style.color == "black") {
          toggle[20].style.color = "red";
        } else {
          toggle[20].style.color = "black";
        }
      }
      break;
    case 21:
      {
        if (toggle[21].style.color == "black") {
          toggle[21].style.color = "red";
        } else {
          toggle[21].style.color = "black";
        }
      }
      break;
    case 22:
      {
        if (toggle[22].style.color == "black") {
          toggle[22].style.color = "red";
        } else {
          toggle[22].style.color = "black";
        }
      }
      break;
    case 23:
      {
        if (toggle[23].style.color == "black") {
          toggle[23].style.color = "red";
        } else {
          toggle[23].style.color = "black";
        }
      }
      break;
    case 24: {
      if (toggle[24].style.color == "black") {
        toggle[24].style.color = "red";
      } else {
        toggle[24].style.color = "black";
      }
    }
  }
}

function addToCartClicked(event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName("product-price")[0].innerText;
  var imageSrc = cartItem.getElementsByClassName("product-image")[0].src;
  addItemToCart(price, imageSrc);
  updateCartPrice();
}

function addItemToCart(price, imageSrc) {
  var productRow = document.createElement("div");
  productRow.classList.add("product-row");
  var productRows = document.getElementsByClassName("product-rows")[0];
  var cartImage = document.getElementsByClassName("cart-image");

  for (var i = 0; i < cartImage.length; i++) {
    if (cartImage[i].src == imageSrc) {
      alert("This item has already been added to the cart");
      return;
    }
  }

  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `;
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow
    .getElementsByClassName("remove-btn")[0]
    .addEventListener("click", removeItem);
  productRow
    .getElementsByClassName("product-quantity")[0]
    .addEventListener("change", changeQuantity);
  updateCartPrice();
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener("click", removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartPrice();
}

// update quantity input
var quantityInput = document.getElementsByClassName("product-quantity")[0];

for (var i = 0; i < quantityInput; i++) {
  input = quantityInput[i];
  input.addEventListener("change", changeQuantity);
}

function changeQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartPrice();
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0;
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;

  document.getElementsByClassName("cart-quantity")[0].textContent = i /= 2;
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector(".purchase-btn");

const closeCartModal = document.querySelector(".cart-modal");

purchaseBtn.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
  alert("Thank you for your purchase");
  cartModalOverlay.style.transform = "translateX(-100%)";
  var cartItems = document.getElementsByClassName("product-rows")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartPrice();
}
// end of purchase items

//alert user if cart is empty
//
// function increment() {
//   if (count == 0) {
//     count++;
//     num.innerHTML = count;
//   }
// }

// function decrement() {
//   if (count >= 1) {
//     count--;
//     num.innerHTML = count;
//   }
// }

//

// cartsidebar.addEventListener("click",Function(){
//   cartsidebar.style.transform=(translate 100%)
// })

// cartsidebar.addEventListener("click",Function(){
//   closecart.style.transform=(translate 0%)
// })
