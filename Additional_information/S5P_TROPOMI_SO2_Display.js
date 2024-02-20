// =================================================================================
// |             GEE script to visualise Sentinel-5P TROPOMI SO2 data              |
// =================================================================================
// (c) B. Smets – Vrije Universiteit Brussel / AfricaMuseum, 2021
// Version 0.1


// Define location and ROI
// ------------------------

// var roi = ee.Geometry.Rectangle([-21.2695, -48.5748, 214.9805, 6.4900]);   ---> Does not work!
// var roi = ee.Geometry.Polygon([[[-21.2695, -48.5748], [214.9805, -48.5748], [214.9805, 6.4900], [-21.2695, 6.4900], [-21.2695, -48.5748]]]);   ---> Does not work!
var roi = ee.Geometry.BBox(-21.2695, -48.5748, 214.9805, 6.4900); 

var locx = 102.48;
var locy = -22.59;
var zoom = 3;

// Select the collection of images and filter it by (1) layer, (2) date range (, (3) region of interest)
// -----------------------------------------------------------------------------------------------------
var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
  .select('SO2_column_number_density')
  .filterDate('2022-01-15', '2022-01-23')
  .filterBounds(roi);

// Display on the interactive map
// -------------------------------

var band_viz = {
  min: 0.0001,
  max: 0.001,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
  opacity: 0.5
};

Map.addLayer(collection.mean().clip(roi), band_viz, 'S5P SO2');
Map.setCenter(locx, locy, zoom);