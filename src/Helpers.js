export default class Helpers {
    getNextId(products) {
        let max = 0;
        for (let i = 0; i < products.length; i++) {
            max = Math.max(max, products[i].id);
        }
        return max + 1;
    }
}