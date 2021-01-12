
const co2eColours = ["brown"];

const co2eQuantitiesFn =
    (records, area, year) => [0].map(placeholder => {
        let ix = records.findIndex(y => (y.area == area) && (y.year == year));
        if (ix == -1) console.log("Warning: no record for: " + area + ", " + year );
        return ix == -1 ? 0 : records[ix].tonnes;
});

const co2eDetailHtmlfn =
    (records, area, year) => {
        let s = [0].map(placeholder => {
            let ix = records.findIndex(y => (y.area == area) && (y.year == year));
            return `<dt>CO<sub>2</sub> equivalent:</dt><dd><span style="font-weight: bold; color: ${co2eColours[placeholder]}">${(ix == -1 ? '?' : records[ix].tonnes.toFixed(3))}</dd>`;
        }).join(" ");
        return `<h4>${area} ${year}</h4><div class='qual'>Tonnes per person per year</div><dl>${s}</dl>`;
};

const co2eLegendPartHtml = '<i style="background: brown"></i>CO<sub>2</sub> equivalent<br/>';

const co2eConfig = {
    quantitiesFn: co2eQuantitiesFn,
    detailHtmlfn: co2eDetailHtmlfn,
    colours: co2eColours,
    legendPartHtml: co2eLegendPartHtml
};


// ---------------------------------------------

export { co2eConfig };