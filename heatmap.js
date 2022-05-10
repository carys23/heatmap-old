const defaultHmRadius = 40;
const defaultHmBlur = 50;


var heatmap = null
var hmRadius = defaultHmRadius;
var hmBlur = defaultHmBlur;



self.getSettingsSchema = function() {
    var s = TbMapWidgetV2.settingsSchema('image-map');


    /// Raduis
    s.schema.properties.heatmapRadius = {
      title: "Radius",
      type: "number",
      default: 90
    };

    // /// Blur
    s.schema.properties.heatmapBlur = {
      title: "Blur",
      type: "number",
      default: 20
    };
    

    // /// intensity
   s.schema.properties.intensity = {
      title: "Intensity",
      type: "number",
      default: 10
    };
    
    ///// intensity name 
   s.schema.properties.footfall = {
      title: "Intensity data key",
      type: "string",
      default: "footfall"
    };

    s.groupInfoes.push({formIndex: 5, GroupTitle: 'Heatmap'});
    s.form.push(['heatmapRadius','heatmapBlur', 'intensity', 'footfall' ]);
    

    return s;
};



self.onInit = function() {
    self.ctx.map = new TbMapWidgetV2('image-map',true, self.ctx, null, false);
    heatmap = L.heatLayer([], {radius: self.ctx.settings.heatmapRadius, blur: self.ctx.settings.heatmapBlur}  );
   
 
  
  setTimeout(function()

  {     
      
       
          
      
      
      
        let map = self.ctx.map.map.map;
        let zoom = map.on('zoomend',  function (e ) {
        
        let multiplier = map.getZoom();
        
        heat = heatmap.addTo(self.ctx.map.map.map);
        
        if (multiplier === 1){
            hmRadius = defaultHmRadius;
            hmBlur = defaultHmBlur;
            console.log('HM RADUIS 1 ' + hmRadius);
            console.log('HM BLUR  1 ' + hmBlur);
        }
        
        // if (multiplier === 2){
            
        //     hmRadius = defaultHmRadius * multiplier;
        //     hmBlur = defaultHmBlur *  multiplier;
    
            
        //     hmRadius  * 1;
        //     hmBlur * 1;

        //     console.log('HM RADUIS 2 ' + hmRadius);
        //     console.log('HM BLUR  2 ' + hmBlur);
            
            
            
        //       if (hmRadius != defaultHmRadius * 1 ){
        //       hmRadius = defaultHmRadius * 1;
        //     }
        //     if (hmBlur != defaultHmBlur * 1){
        //         hmBlur = defaultHmBlur * 1;
        //     }
            
        // }
           if (multiplier === 2){
            
            hmRadius = defaultHmRadius * 1.2;
            hmBlur = defaultHmBlur * 1.3;
            console.log('HM RADUIS 2 ' + hmRadius);
            console.log('HM BLUR  2 ' + hmBlur);
            
        }
    
        if (multiplier === 3){
         
            hmRadius = defaultHmRadius * 1.4;
            hmBlur = defaultHmBlur * 1.4;
          
            // hmRadius  * 1.2;
            // hmBlur  * 1.2;
            console.log('HM RADUIS 3 ' + hmRadius);
            console.log('HM BLUR  3 ' + hmBlur);
            
       
              if (hmRadius >= 70){
              hmRadius = 70;
            }
            if (hmBlur >= 70){
                hmBlur = 70;
            }
      
        }
          if (multiplier === 4){
      
              hmRadius = defaultHmRadius * 1.8;
            hmBlur = defaultHmBlur * 1.8;
            if (hmRadius >= 80){
                hmRadius = 80;
            }
            if (hmBlur >= 60){
                hmBlur = defaultHmBlur;
            }
            console.log('heat');
            console.log(heat);
            console.log('HM RADUIS 4 ' + hmRadius);
            console.log('HM BLUR  4 ' + hmBlur);
           
            
            
        }
        
    console.log('multiplier');
     console.log(multiplier);
    

    
    heatO = heatmap.setOptions({radius: hmRadius, blur: hmBlur});
    // console.log('heatO');
    // console.log(heatO);
    
    let data = self.ctx.map.map.markersData;
    heatmap.setLatLngs([]);
    let intensity = self.ctx.settings.intensity -4;
    for (var i in data)
    {
        let latLngVal = [
            
            data[i].y * self.ctx.map.map.southWest.lat, 
            data[i].x * self.ctx.map.map.northEast.lng, intensity
            // data[i][self.ctx.settings.footfall]
        ];
       heat =  heatmap.addLatLng(latLngVal);}
    
     console.log('self.ctx.map.map.map');
    console.log(heat);
    });
    
    
    ///// await
     
      
    //   heatO = heatmap.setOptions({radius: hmRadius, blur: hmBlur});
    // console.log('heatO');
    // console.log(heatO);
    
     
      
  }, 0);
  
    
  };
 

self.onResize = function() {
    self.ctx.map.resize();
 
     
    let data = self.ctx.map.map.markersData;
    heatmap.setLatLngs([]);
    
    
    for (var i in data)
    {
        let latLngVal = [
           
            data[i].y * self.ctx.map.map.southWest.lat, 
            data[i].x * self.ctx.map.map.northEast.lng, self.ctx.settings.intensity
            // data[i][self.ctx.settings.footfall]
        ];
       heat =  heatmap.addLatLng(latLngVal);
      
        
    }
     
    heat = heatmap.addTo(self.ctx.map.map.map);
};


self.getDataKeySettingsSchema = function() {

    return TbMapWidgetV2.dataKeySettingsSchema(
        'image-map');
};


self.onDataUpdated = function() {
    
    self.ctx.map.update();
   
     
    let data = self.ctx.map.map.markersData;
    heatmap.setLatLngs([]);
    
    
    for (var i in data)
    {
        let latLngVal = [
           
            data[i].y * self.ctx.map.map.southWest.lat, 
            data[i].x * self.ctx.map.map.northEast.lng, self.ctx.settings.intensity,
            // data[i][self.ctx.settings.footfall]
        ];
       heat =  heatmap.addLatLng(latLngVal);
        
    }
     
    heat = heatmap.addTo(self.ctx.map.map.map);
    
  
};


self.actionSources = function() {

    return TbMapWidgetV2.actionSources();
};


self.onDestroy = function() {
};



self.typeParameters = function() {
    return {
        hasDataPageLink: true
    };
}; 
