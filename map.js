var dataPointOne = 
[
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
    [800,800],
];


var dataPointTwo = 
[

    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],
    [120,120],]

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

function vauleOutputOne(dataPointOne)
{
    var value = dataPointOne.length;
    console.log('dataPointOne is: ', value)
    
    if (value < 5){
        const intensity600 = 700;
        console.log(intensity600)
        return intensity600
    }
        

    else if  (value < 10) {
        const intensity700 = 800;
        console.log(intensity700)
        return intensity700
    }
            
    
    else if  (value < 15) {
        const intensity800 = 900;
        console.log(intensity800)
        return intensity800
        }
            

    else if  (value < 40){
        const intensity1000 = 1000;
        console.log(intensity1000)
        return intensity1000
        }

    
    else if  (value < 50){
        const intensity1500 = 1500;
        console.log(intensity1500)
        return intensity1500
        }

    else if  (value < 60){
        const intensity2000 = 2000;
        console.log(intensity2000)
        return intensity2000
            }
    else if  (value < 70){
        const intensity2500 = 2500;
        console.log(intensity2500)
        return intensity2500
                }
    
    else if  (value < 80){
        const intensity3000 = 3000;
        console.log(intensity3000)
        return intensity3000
                }

    else if  (value < 90){
        const intensity4000 = 4000;
        console.log(intensity4000)
        return intensity4000
                            }

    else if  (value < 100){
        const intensity5000 = 5000;
        console.log(intensity5000)
        return intensity5000
                            }

    else if  (value < 110){
        const intensity6000 = 6000;
        console.log(intensity6000)
        return intensity6000
                            }

    else if  (value < 120){
        const intensity7000 = 7000;
        console.log(intensity7000)
        return intensity7000
                            }

    else if  (value >= 140){
        const intensity8000 = 80000;
        console.log(intensity8000)
        return intensity8000
                            }
    
        var intensity = value
        console.log('intensity is', intensity)
        return intensity

}


function vauleOutputTwo(dataPointTwo)
{
    var value = dataPointTwo.length;
    console.log('dataPointTwo is: ', value)
    
    if (value < 5){
        const intensity600 = 700;
        console.log(intensity600)
        return intensity600
    }
        

    else if  (value < 10) {
        const intensity700 = 800;
        console.log(intensity700)
        return intensity700
    }
            
    
    else if  (value < 15) {
        const intensity800 = 900;
        console.log(intensity800)
        return intensity800
        }
            

    else if  (value < 20){
        const intensity1000 = 1000;
        console.log(intensity1000)
        return intensity1000
        }

    
    else if  (value < 50){
        const intensity1500 = 1500;
        console.log(intensity1500)
        return intensity1500
        }

    else if  (value < 60){
        const intensity2000 = 2000;
        console.log(intensity2000)
        return intensity2000
            }
    else if  (value < 70){
        const intensity2500 = 2500;
        console.log(intensity2500)
        return intensity2500
                }
    
    else if  (value < 80){
        const intensity3000 = 3000;
        console.log(intensity3000)
        return intensity3000
                }

    else if  (value < 90){
        const intensity4000 = 4000;
        console.log(intensity4000)
        return intensity4000
                            }

    else if  (value < 100){
        const intensity5000 = 5000;
        console.log(intensity5000)
        return intensity5000
                            }

    else if  (value < 110){
        const intensity6000 = 6000;
        console.log(intensity6000)
        return intensity6000
                            }

    else if  (value < 120){
        const intensity7000 = 7000;
        console.log(intensity7000)
        return intensity7000
                            }
    
  

    else if  (value > 140){
        const intensity8000 = 8000;
        console.log(intensity8000)
        return intensity8000
                                }

    var intensity = value
    
        return intensity
}


// console.log('dataPointOne is ', vauleOutputOne(dataPointOne));
// console.log('dataPointTwo is ', vauleOutputTwo(dataPointTwo));


// Given the requisite coordinates and a value, create a marker and a heatmap
// point
function createPointOne(map, heatmap, latlng, dataPointOne)
{
    // A point on the heatmap consists of three values - the latitude, the
    // longitude, and the intensity of the point, whereas a normal marker is
    // just the latitude and longitude
    var latlngint = latlng;
    latlngint.push(dataPointOne);

    var marker = L.marker(latlng).addTo(map);
    
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

    var marker = L.marker(latlng).addTo(map);
    
    heatmap.addLatLng(latlng);
    return marker;
}

// Supposedly the highest intensity value by default should be 1.0, but that 
// doesn't work for me
// createPointOne(map, heat, [800,800], dataPointOne);
dataPointOne = vauleOutputOne(dataPointOne)
dataPointTwo = vauleOutputTwo(dataPointTwo)
createPointOne(map, heat, [400,400], dataPointOne);
createPointTwo(map, heat, [120,120], dataPointTwo);
