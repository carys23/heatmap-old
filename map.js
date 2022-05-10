var map = L.map('map', { crs: L.CRS.Simple });

var bounds = [[0,0],[1000,1000]];
var image = L.imageOverlay('teams.png', bounds).addTo(map);
map.fitBounds(bounds);

// Change us to vary the base sizes of the heatmap points.

// const defaultHmRadius = 25;
// const defaultHmBlur = 20;

let defaultHmRadius = 40;
let defaultHmBlur = 25;

const gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}

var hmRadius = defaultHmRadius;
var hmBlur = defaultHmBlur;


var heat = L.heatLayer([], { }).addTo(map);


// We don't want the heatmap to stay the same size as we zoom in and out, we 
// want it to scale with us. This provides a naive implementation of such a 
// function (comment out to see the default functionality).
map.on('zoomend', function(ev) {
    // To avoid multiplying by zero (remove the + 1 and zoom in and out to see 
    // what happens otherwise)
    

let multiplier = map.getZoom();

                 heatmap.addTo(map);
                 const  defaultHmRadius = 40;
                 const defaultHmBlur = 20;

                if (multiplier === 1) {
                    hmRadius = defaultHmRadius;
                    hmBlur = defaultHmBlur;
                 
                }



                if (multiplier === 3) {

                    hmRadius = defaultHmRadius * 1.4;
                    hmBlur = defaultHmBlur * 1.5;

                    if (hmRadius >= 70) {
                        hmRadius = 70;
                    }
                    if (hmBlur >= 70) {
                        hmBlur = 40;
                    }

                }
                if (multiplier === 4) {

                    hmRadius = defaultHmRadius * 1.8;
                    hmBlur = defaultHmBlur * 1.8;
                    if (hmRadius >= 80) {
                        hmRadius = 80;
                    }
                    if (hmBlur >= 60) {
                        hmBlur =
                            defaultHmBlur;
                    }

                }

    // Update the heatmap
    L.heatLayer([], {radius: hmRadius, blur: hmRadius}).addTo(map);
    // heat.setOptions({radius: hmRadius, blur: hmRadius});
});

var LightIcon = L.Icon.extend({
    options: {
    iconSize:[25, 20],
    }
});

var LightIcon = new LightIcon ({
    iconUrl: 'light1.png'});

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