var map = L.map('map', { crs: L.CRS.Simple });

var bounds = [[0,0],[1000,1000]];
var image = L.imageOverlay('fp.png', bounds).addTo(map);
map.fitBounds(bounds);




// Change us to vary the base sizes of the heatmap points.
const defaultHmRadius = 50;
const defaultHmBlur = 35;
const gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}


var heat = L.heatLayer([], {radius: defaultHmRadius, blur: defaultHmBlur, gradient:gradient }).addTo(map);


// We don't want the heatmap to stay the same size as we zoom in and out, we 
// want it to scale with us. This provides a naive implementation of such a 
// function (comment out to see the default functionality).
map.on('zoomend', function(ev) {
    // To avoid multiplying by zero (remove the + 1 and zoom in and out to see 
    // what happens otherwise)
    let multiplier = map.getZoom() + 1;

    // This probably wants to be a little more sophisticated than just a linear
    // scaling.
    defaultHmRadius * multiplier;
    defaultHmBlur * multiplier;

    // Update the heatmap
    heat.setOptions({radius: defaultHmRadius, blur: defaultHmBlur});
});

var LeafIcon = L.Icon.extend({
    options: {
    iconSize:[60, 55],
    }
});

var lightIcon = new LeafIcon ({
    iconUrl: 'light.png'});

// Given the requisite coordinates and a value, create a marker and a heatmap
// point
function createPointOne(map, heatmap, latlng, dataPointOne)
{
    // A point on the heatmap consists of three values - the latitude, the
    // longitude, and the intensity of the point, whereas a normal marker is
    // just the latitude and longitude
    var latlngint = latlng;
    latlngint.push(dataPointOne);

    var marker = L.marker(latlng,{icon: lightIcon}).addTo(map);
    
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


    var marker = L.marker(latlng,{icon: lightIcon}).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}

// Supposedly the highest intensity value by default should be 1.0, but that 
// doesn't work for me
// createPointOne(map, heat, [800,800], dataPointOne);


createPointOne(map, heat, [400,400], dataPointOne);
createPointTwo(map, heat, [120,120], dataPointTwo);
