export function numberStock(inventory){
    let stock = 0;
    for (let i = 0; i < inventory.length; i++) {
        stock += inventory[i].originalStock;
    }
    return stock;
}