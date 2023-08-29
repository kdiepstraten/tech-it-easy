

function numberSold(inventory) {
    let soldTv = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].sold !== 0){
            soldTv += inventory[i].sold;
        }
        }
        return soldTv;
}
export default numberSold;