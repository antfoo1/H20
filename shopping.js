let store = {
    'apples': {price:1.39, stock:5},
    'bread': {price:2.49, stock:3},
    'eggs': {price:4.99, stock:2},
    'chicken': {price:5.49, stock:5},
    'jucie': {price:4.29, stock:5},
    'rice': {price:2.89, stock:8},
    'chips': {price:3.79, stock:10},
    'water': {price:1.25, stock:12},
};
const shoppingCart = [
    ['apples', 2], ['jucie', 3], ['water', 6], ['eggs', 2], ['chips', 5]
];


function finalTotal(shoppingCart,store ){
    let total = 0;
    for(let [itemName, quantity] of shoppingCart){
        const storeItem = store[itemName];
        if(storeItem !== undefined){
            total += storeItem.price*quantity;
        } else {
            console.log('not in store');
        }
    }return total;
}
module.exports = {finalTotal};

const total = finalTotal(shoppingCart, store);
console.log(`Total: $${total}`);
