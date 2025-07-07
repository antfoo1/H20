let store = {
    'apples': 1.39,
    'bread': 2.49,
    'eggs': 4.99,
    'chicken': 5.49,
    'jucie': 4.29,
    'rice': 2.89,
    'chips': 3.99,
    'water': 1.25
};
const shoppingCart = ['apples', 'jucie', 'water', 'eggs', 'chips'];


function finalTotal(shoppingCart,store ){
    let total = 0;
    for(let item of shoppingCart){
        if(store[item] !== undefined){
            total += store[item];
        } else {
            console.log('not in store');
        }
    }return total;
}

const total = finalTotal(shoppingCart, store);
console.log(`Total: $${total}`);
