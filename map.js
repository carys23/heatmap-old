var map = L.map('map', { crs: L.CRS.Simple });

var bounds = [[0,0],[1000,1000]];
var image = L.imageOverlay('teams.png', bounds).addTo(map);
map.fitBounds(bounds);




// Change us to vary the base sizes of the heatmap points.
// const defaultHmRadius = 25;
// const defaultHmBlur = 20;
const gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}


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

// Given the requisite coordinates and a value, create a marker and a heatmap
// point
function createPointOne(map, heatmap, latlng, dataPointOne)
{
    // A point on the heatmap consists of three values - the latitude, the
    // longitude, and the intensity of the point, whereas a normal marker is
    // just the latitude and longitude
    var latlngint = latlng;
    latlngint.push(dataPointOne);

    var marker = L.marker(latlng,{icon: LightIcon}).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}


function createPointTwo(map, heatmap, latlng, dataPointTwo)
{
    // A point on the heatmap consists of three values - the latitude, the
    // longitude, and the intensity of the point, whereas a normal marker is
    // just the latitude and longitude
    var latlngint = latlng;
    latlngint.push(dataPointTwo);


    var marker = L.marker(latlng,{icon: LightIcon}).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}


function createPointThree(map, heatmap, latlng, dataPointThree)
{
    // A point on the heatmap consists of three values - the latitude, the
    // longitude, and the intensity of the point, whereas a normal marker is
    // just the latitude and longitude
    var latlngint = latlng;
    latlngint.push(dataPointThree);


    var marker = L.marker(latlng,{icon: LightIcon}).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}

// Supposedly the highest intensity value by default should be 1.0, but that 
// doesn't work for me
// createPointOne(map, heat, [800,800], dataPointOne);


createPointOne(map, heat, [400,400], dataPointOne);
createPointTwo(map, heat, [120,120], dataPointTwo);
createPointThree(map, heat, [500,300], dataPointThree);


function removeClass(heat){
    var off = heat;
    off.classList.remove(heat);
}

removeClass(heat);