const { finalTotal } = require('./shopping.js');

describe('finalTotal', () => {
    test('calculates total for items', () => {
        const store = {
            apples: { price: 1.39, stock: 5 },
            jucie: { price: 4.29, stock: 5 },
            water: { price: 1.25, stock: 12 },
            eggs:  { price: 4.99, stock: 2 },
            chips: { price: 3.79, stock: 10 },
        };
        const shoppingCart = [
            ['apples', 2],
            ['jucie', 3],
            ['water', 5],
            ['eggs', 2],
            ['chips', 5],
        ];
        const total = finalTotal(shoppingCart, store);
        expect(total).toBeCloseTo(50.83);
    });

    test('ignores items not in store', () => {
        const store = {
            apples: { price: 1.39, stock: 5 }
        };
        const shoppingCart = [
            ['apples', 1],
            ['oreos', 2] 
        ];
        const total = finalTotal(shoppingCart, store);
        expect(total).toBeCloseTo(1.39); 
    });
});