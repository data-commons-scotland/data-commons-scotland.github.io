
const sumThem = (acc, x) => acc + x;

function createUiCharts(initialYear, uiMap, centres, wasteData, maxTonnesPerYear, quantitiesFn, colours){
    var uiCharts = {};
    let widthMultiplier = 53 / maxTonnesPerYear;
    centres.forEach(x => {
        let quantities = quantitiesFn(wasteData, x.area, initialYear);
        uiCharts[x.area] = L.minichart(
                [x.lat, x.lng],
                {data: quantities,
                 maxValues: maxTonnesPerYear,
                 width: (widthMultiplier * quantities.reduce(sumThem, 0)),
                 //height:50,
                 type: "pie",
                 colors: colours,
                 labels: "auto",
                 labelMinSize: 6
                });
        uiMap.addLayer(uiCharts[x.area]);
    });
    return uiCharts;
}


function updateUiCharts(getYear, uiCharts, centres, wasteData, maxTonnesPerYear, quantitiesFn) {
    let year = getYear();
    let widthMultiplier = 53 / maxTonnesPerYear;
    centres.forEach(x => {
        let quantities = quantitiesFn(wasteData, x.area, year);
        uiCharts[x.area].setOptions({
            data: quantities,
            width: (widthMultiplier * quantities.reduce(sumThem, 0))});
    });
}


// ---------------------------------------------

export { createUiCharts, updateUiCharts };



