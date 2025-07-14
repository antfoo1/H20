let storeItems = {
    'apples': 1.39,
    'bread': 2.49,
    'chips': 3.99,
    'water': 1.25
};
const storeContainer = document.getElementById('store-items');
const cartList = document.getElementById('cart');
const cartTotalSpan = document.getElementById('cart-total');
let cartTotal = 0;
Object.entries(storeItems).forEach(([itemName, price]) =>{
    const buttonElement = document.createElement('button');
    const buttonText = document.createTextNode(itemName);
    button.addEventListener("click", () => {
    addToCart(itemName);
    updateCartTotal(price);
    })
    buttonElement.appendChild(buttonText);
    storeContainer.appendChild(button);
})

function addToCart(itemName){
    const listItem = document.createElement('li');
    const listText = document.createTextNode(itemName);
    listItem.appendChild(listText);
    cartList.appendChild(listItem);
}

function updateCartTotal(price) {
  cartTotal += price;
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}
