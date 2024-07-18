// Initial Setup options
// ----------------------
// For BBox, the coordinates have to be WEST, SOUTH, EAST, NORTH
var roi = ee.Geometry.BBox(-175.0, 5.0, -125.0, 45.0);

var locx = -130.0;
var locy = 20.5;
var zoom = 4;

var roi_export = 'no';

var start_date = '2022-11-28';
var end_date = '2022-11-30';

// Select the collection of images and filter it by (1) layer, (2) date range (, (3) region of interest)
// -----------------------------------------------------------------------------------------------------
var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
  .select('SO2_column_number_density')
  .filterDate(start_date, end_date)
  .filterBounds(roi);

// Display on the interactive map
// -------------------------------

var palettes = require('users/gena/packages:palettes');

// Select your palette on https://github.com/gee-community/ee-palettes
var palette = palettes.kovesi.linear_bmy_10_95_c78[7];

var band_viz = {
  min: 0.0001,
  max: 0.001,
  palette: palette,
  opacity: 0.5
};

var so2_image = collection.mean().clip(roi);

Map.addLayer(so2_image, band_viz, 'S5P SO2');
Map.setCenter(locx, locy, zoom);

// Export option
// --------------

if (roi_export == 'yes') {
  var description = 'Export_SO2_image_' + start_date + '_' + end_date;
  var export_name = 'S5P_TROPOMI_SO2_' + start_date + '_' + end_date; 
  var image_to_export = so2_image;
  Export.image.toDrive({
    image: image_to_export,
    description: description,
    crs: 'EPSG:4326',
    folder: '_fromGEE',
    fileNamePrefix: export_name,
    scale: 7000,
    region: roi,
    fileFormat: 'GeoTIFF'
  });
}
