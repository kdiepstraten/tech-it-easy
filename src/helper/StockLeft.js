import {numberStock} from "./Stock.js";
import numberSold from "./FunctionSold.js";

export function stockLeft(inventory){
    return numberStock(inventory) - numberSold(inventory);

}