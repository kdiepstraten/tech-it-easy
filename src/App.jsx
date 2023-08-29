import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import numberSold from "./helper/FunctionSold.js";
import {numberStock} from "./helper/Stock.js";
import {stockLeft} from "./helper/StockLeft.js";
import {stringName} from "./helper/StringName.js";
import converter from "./helper/converter.js";
import availableSizes from "./helper/availableSizes.js";
import tv from "./assets/screenshots/tv.jpg";

function clickSold(){
    console.log('Meest verkocht eerst');
}
function clickCheapest(){
    console.log('Goedkoopste eerst');
}
function clickSport(){
    console.log('Meest geschikt voor sport eerst');
}

function App() {
    return (
        <>

            <div className={"container"}>
                <div className="box box-green">
                    <h1>Number sold</h1>
                    <p className={"green"}>{numberSold(inventory)}</p>
                </div>
                <div className="box box-blue">
                    <h1>Number in stock</h1>
                    <p className={"blue"}>{numberStock(inventory)}</p>
                </div>
                <div className="box box-red">
                    <h1>Stock after sale</h1>
                    <p className={"red"}>{stockLeft(inventory)}</p>
                </div>
                <div className="product">
                    <figure>
                        <img src={tv} alt="Televisie"/>
                    </figure>
                    <div className="product-info">
                        <h2>{stringName(bestSellingTv)}</h2>
                        <h1 className="price">{converter(bestSellingTv.price)}</h1>
                        <h3>{availableSizes(bestSellingTv)}</h3>
                        <h3>[check-icon] wifi [not-icon] speech [check-icon] hdr [check-icon] bluetooth [not-icon]
                            ambilight</h3>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button" onClick={clickSold}>Meest verkocht eerst</button>
                    <button type="button" onClick={clickCheapest}>Goedkoopste eerst</button>
                    <button type="button" onClick={clickSport}>Meest geschikt voor sport eerst</button>
                </div>
            </div>

        </>
    )
}

export default App
