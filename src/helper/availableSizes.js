
 function availableSizes(tv){
    let size = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        size += calculate(tv.availableSizes[i]);
    }
    return size;
}

function calculate(number){
    let centimer = number * 2.54;
    return `${number} inch ${Math.round(centimer)} cm | `;
}
export default availableSizes;