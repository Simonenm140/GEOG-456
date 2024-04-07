// You need to create a geometry, otherwise this will not work. 

var yearBefore = '2012'
var yearAfter = '2020'

// var dataset = ee.ImageCollection('USDA/NAIP/DOQQ')
//                   .filter(ee.Filter.date('2017-01-01', '2018-12-31'));

var datasetBefore = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearBefore +'-01-01', yearBefore+'-12-31'))

var datasetAfter = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearAfter +'-01-01', yearAfter+'-12-31'))


//var trueColor = dataset.select(['R', 'G', 'B']);
var befImg = datasetBefore.select(['R', 'G', 'B'])
befImg = befImg.median().clip(geometry);

var aftImg = datasetAfter.select(['R', 'G', 'B'])
aftImg = aftImg.median().clip(geometry);

var trueColorVis = {
  min: 0,
  max: 255,
};

// why cant i see the NAIP in this ? can see geomtry but not data 

Map.setCenter(-80.13474, 25.78188, 13) 
Map.addLayer(aftImg, trueColorVis, yearAfter);
Map.addLayer(befImg, trueColorVis, yearBefore);

// reduce clip for south beach 
var dataset = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.date('2017-01-01', '2018-12-31'));
var trueColor = dataset.select(['R', 'G', 'B']).median().clip(geometry);
var trueColorVis = {
  min: 0,
  max: 255,
};
Map.setCenter(-80.13474, 25.78188, 13);
Map.addLayer(trueColor, trueColorVis, 'SouthBeach');

// 
var yearBefore = '2016';
var yearAfter = '2019';
var yearAfter2 = '2022';

var datasetBefore = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearBefore + '-01-01', yearBefore + '-12-31'));

var datasetAfter = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearAfter + '-01-01', yearAfter + '-12-31'));
                  
var datasetAfter2 = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearAfter2 + '-01-01', yearAfter2 + '-12-31'));

var befImg = datasetBefore.select(['R', 'G', 'B'])
                      .median()
                      .clip(geometry);

var aftImg = datasetAfter.select(['R', 'G', 'B'])
                      .median()
                      .clip(geometry);

var aftImg2 = datasetAfter2.select(['R', 'G', 'B'])
                      .median()
                      .clip(geometry);

var trueColorVis = {
  min: 0,
  max: 255,
};

Map.setCenter(-80.13474, 25.78188, 13);
Map.addLayer(befImg, trueColorVis, yearBefore);
Map.addLayer(aftImg, trueColorVis, yearAfter);
Map.addLayer(aftImg2, trueColorVis, yearAfter2);


print(befImg);
print(aftImg);
print(aftImg2);


