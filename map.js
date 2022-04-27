var map = L.map('map', { crs: L.CRS.Simple });

var bounds = [[0,0],[1000,1000]];
var image = L.imageOverlay('floor.png', bounds).addTo(map);
map.fitBounds(bounds);

// Change us to vary the base sizes of the heatmap points.
let defaultHmRadius = 40;
let defaultHmBlur = 25;
const gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}

var hmRadius = defaultHmRadius;
var hmBlur = defaultHmBlur;

// if zoomend 

myfunc = function (){
    if (('zoomend' )) {

    (map.on('zoomend',  func = function (e ) {

        let multiplier = map.getZoom() + 2;
    
        defaultHmRadius * multiplier;
        defaultHmBlur *  multiplier;
    
        
        hmRadius = defaultHmRadius * multiplier;
        hmBlur = defaultHmBlur * multiplier;
    
        return heat.setOptions({radius: hmRadius, blur: hmBlur});
    }))};
}

// myfunc2 = function (){
//     if (('zoomend' )) {

//     (map.on('zoomend',  func = function (e ) {

//         let multiplier = map.getZoom() + 10;
    
//         defaultHmRadius * multiplier;
//         defaultHmBlur *  multiplier;
        
//         alert('myfunc 2');
        
//         hmRadius = defaultHmRadius * multiplier;
//         hmBlur = defaultHmBlur * multiplier;
    
//         return heat.setOptions({radius: hmRadius, blur: hmBlur});
//     }))};
// }


myfunc(heat);
var heat = L.heatLayer([], {radius: defaultHmRadius, blur: defaultHmBlur }).addTo(map);


var heat = L.heatLayer([], {radius: hmRadius, blur: hmBlur}).addTo(map);


function createPointThree(map, heatmap, latlng, dataPointThree)
{
    var latlngint = latlng;
    latlngint.push(dataPointThree);


    var marker = L.marker(latlng,).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}

createPointThree(map, heat, [500,300], dataPointThree);