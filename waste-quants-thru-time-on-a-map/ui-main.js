import * as areaData from "./area-data.js";
import * as centreData from "./centre-data.js";
import * as mgmtWasteData from "./hw-mgmt-data.js";
import * as co2eWasteData from "./hw-co2e-data.js";
import * as uiMapOps from "./ui-map.js";
import * as uiControlOps from "./ui-control.js";
import * as uiChartOps from "./ui-chart.js";
import * as mgmtConfig from "./mgmt-config.js";
import * as co2eConfig from "./co2e-config.js";


var highlightedFeature = null;
const setHighlightedFeature = x => highlightedFeature = x;
const getHighlightedFeature = () => highlightedFeature;

var uiDetail = null;
var uiYear = null;
var uiLegend = null;
var uiCharts = null;
var uiSlider = null;
var keydownHandler = null;
const getUiDetail = () => uiDetail;
const getUiYear = () => uiYear
const getUiLegend = () => uiLegend;
const getUiCharts = () => uiCharts;
const getUiSlider = () => uiSlider;

var uiMap = uiMapOps.createUiMap(areaData.geoJson, getUiDetail, setHighlightedFeature);
uiControlOps.createUiTitle().addTo(uiMap);
uiControlOps.createUiSwapper(["Managed solid waste", "CO2 equivalent"], swap).addTo(uiMap);


function addUiSwappables(wasteData, config){
    let yearMin = wasteData.minYear;
    let yearMax = wasteData.maxYear;
    let yearInitial = yearMax;

    let getYear = () => {
        let ele = document.getElementById('year');
        return (ele == null) ? yearInitial : ele.value;
    }

    uiYear = uiControlOps.createUiYear(getYear);
    uiYear.addTo(uiMap);

    uiDetail = uiControlOps.createUiDetail(getYear, wasteData.records, config.detailHtmlfn);
    uiDetail.addTo(uiMap);

    uiLegend = uiControlOps.createUiLegend(config.legendPartHtml);
    uiLegend.addTo(uiMap);

    uiCharts = uiChartOps.createUiCharts(yearInitial, uiMap, centreData.coords, wasteData.records, wasteData.maxTonnesPerYear, config.quantitiesFn, config.colours);

    let dispatchUpdates = () => {
        uiChartOps.updateUiCharts(getYear, uiCharts, centreData.coords, wasteData.records, wasteData.maxTonnesPerYear, config.quantitiesFn);
        uiDetail.update(getHighlightedFeature());
        uiYear.update();
    }

    uiSlider = uiControlOps.createUiSlider(yearMin, yearMax, dispatchUpdates);
    uiSlider.addTo(uiMap);

    document.getElementById('year').value = yearInitial;
    keydownHandler = () => uiControlOps.keyHandler(yearMin, yearMax, dispatchUpdates);
    document.body.addEventListener('keydown', keydownHandler);
}

function removeUiSwappables(){
    uiDetail.remove();
    uiYear.remove();
    uiLegend.remove();
    Object.entries(uiCharts).map(([k,v]) => uiMap.removeLayer(v));
    uiSlider.remove();
    document.body.removeEventListener('keydown', keydownHandler);
}

function swapUiSwappables(){
    removeUiSwappables();
    addUiSwappables(co2eWasteData, co2eConfig.co2eConfig);
}


const targets = [
    {wasteData: mgmtWasteData, config: mgmtConfig.mgmtConfig},
    {wasteData: co2eWasteData, config: co2eConfig.co2eConfig}
];

function swap(targetIx){
    removeUiSwappables();
    addUiSwappables(targets[targetIx].wasteData, targets[targetIx].config);
}

addUiSwappables(targets[0].wasteData, targets[0].config);



