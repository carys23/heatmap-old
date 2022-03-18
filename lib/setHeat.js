

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

dataPointOne = vauleOutputOne(dataPointOne)
dataPointTwo = vauleOutputTwo(dataPointTwo)