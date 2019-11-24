var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_RasterContour3500_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "RasterContour3500",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RasterContour3500_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13477828.800739, 2855701.236413, 13506017.300240, 2880560.456796]
                            })
                        });
var format_ContourPolygon3000_2 = new ol.format.GeoJSON();
var features_ContourPolygon3000_2 = format_ContourPolygon3000_2.readFeatures(json_ContourPolygon3000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourPolygon3000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourPolygon3000_2.addFeatures(features_ContourPolygon3000_2);
var lyr_ContourPolygon3000_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourPolygon3000_2, 
                style: style_ContourPolygon3000_2,
                interactive: true,
                title: '<img src="styles/legend/ContourPolygon3000_2.png" /> ContourPolygon3000'
            });
var format_ContourLines3500_3 = new ol.format.GeoJSON();
var features_ContourLines3500_3 = format_ContourLines3500_3.readFeatures(json_ContourLines3500_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourLines3500_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourLines3500_3.addFeatures(features_ContourLines3500_3);
var lyr_ContourLines3500_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourLines3500_3, 
                style: style_ContourLines3500_3,
                interactive: true,
                title: '<img src="styles/legend/ContourLines3500_3.png" /> ContourLines3500'
            });
var format_TradeAreas_4 = new ol.format.GeoJSON();
var features_TradeAreas_4 = format_TradeAreas_4.readFeatures(json_TradeAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TradeAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TradeAreas_4.addFeatures(features_TradeAreas_4);
var lyr_TradeAreas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TradeAreas_4, 
                style: style_TradeAreas_4,
                interactive: true,
    title: 'TradeAreas<br />\
    <img src="styles/legend/TradeAreas_4_0.png" /> JH<br />\
    <img src="styles/legend/TradeAreas_4_1.png" /> JL<br />\
    <img src="styles/legend/TradeAreas_4_2.png" /> JP<br />\
    <img src="styles/legend/TradeAreas_4_3.png" /> KI<br />\
    <img src="styles/legend/TradeAreas_4_4.png" /> LD<br />\
    <img src="styles/legend/TradeAreas_4_5.png" /> LG<br />\
    <img src="styles/legend/TradeAreas_4_6.png" /> LI<br />\
    <img src="styles/legend/TradeAreas_4_7.png" /> PH<br />\
    <img src="styles/legend/TradeAreas_4_8.png" /> TP<br />\
    <img src="styles/legend/TradeAreas_4_9.png" /> XU<br />\
    <img src="styles/legend/TradeAreas_4_10.png" /> YM<br />\
    <img src="styles/legend/TradeAreas_4_11.png" /> <br />'
        });
var format_TaiwanStores_5 = new ol.format.GeoJSON();
var features_TaiwanStores_5 = format_TaiwanStores_5.readFeatures(json_TaiwanStores_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TaiwanStores_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TaiwanStores_5.addFeatures(features_TaiwanStores_5);
var lyr_TaiwanStores_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TaiwanStores_5, 
                style: style_TaiwanStores_5,
                interactive: true,
                title: '<img src="styles/legend/TaiwanStores_5.png" /> TaiwanStores'
            });
var format_TradeAreasPOI_6 = new ol.format.GeoJSON();
var features_TradeAreasPOI_6 = format_TradeAreasPOI_6.readFeatures(json_TradeAreasPOI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TradeAreasPOI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TradeAreasPOI_6.addFeatures(features_TradeAreasPOI_6);
var lyr_TradeAreasPOI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TradeAreasPOI_6, 
                style: style_TradeAreasPOI_6,
                interactive: true,
                title: '<img src="styles/legend/TradeAreasPOI_6.png" /> TradeAreasPOI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RasterContour3500_1.setVisible(true);lyr_ContourPolygon3000_2.setVisible(true);lyr_ContourLines3500_3.setVisible(true);lyr_TradeAreas_4.setVisible(true);lyr_TaiwanStores_5.setVisible(true);lyr_TradeAreasPOI_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RasterContour3500_1,lyr_ContourPolygon3000_2,lyr_ContourLines3500_3,lyr_TradeAreas_4,lyr_TaiwanStores_5,lyr_TradeAreasPOI_6];
lyr_ContourPolygon3000_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_ContourLines3500_3.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_TradeAreas_4.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'POD Code': 'POD Code', });
lyr_TaiwanStores_5.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'open date': 'open date', 'close date': 'close date', 'fid_2': 'fid_2', 'Store Code': 'Store Code', 'POD Code': 'POD Code', });
lyr_TradeAreasPOI_6.set('fieldAliases', {'LINK_ID': 'LINK_ID', 'POI_ID': 'POI_ID', 'FAC_TYPE': 'FAC_TYPE', 'POI_NAME': 'POI_NAME', 'ST_NAME': 'ST_NAME', 'FAC_DESC': 'FAC_DESC', 'FOOD_TYPE': 'FOOD_TYPE', });
lyr_ContourPolygon3000_2.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_ContourLines3500_3.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_TradeAreas_4.set('fieldImages', {'fid': 'TextEdit', 'Store Code': 'TextEdit', 'POD Code': 'TextEdit', });
lyr_TaiwanStores_5.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'open date': 'TextEdit', 'close date': 'TextEdit', 'fid_2': 'TextEdit', 'Store Code': 'TextEdit', 'POD Code': 'TextEdit', });
lyr_TradeAreasPOI_6.set('fieldImages', {'LINK_ID': '', 'POI_ID': '', 'FAC_TYPE': '', 'POI_NAME': '', 'ST_NAME': '', 'FAC_DESC': '', 'FOOD_TYPE': '', });
lyr_ContourPolygon3000_2.set('fieldLabels', {'id': 'no label', 'cost_level': 'inline label', });
lyr_ContourLines3500_3.set('fieldLabels', {'id': 'no label', 'cost_level': 'inline label', });
lyr_TradeAreas_4.set('fieldLabels', {'fid': 'no label', 'Store Code': 'header label', 'POD Code': 'inline label', });
lyr_TaiwanStores_5.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'open date': 'no label', 'close date': 'no label', 'fid_2': 'no label', 'Store Code': 'header label', 'POD Code': 'inline label', });
lyr_TradeAreasPOI_6.set('fieldLabels', {'LINK_ID': 'no label', 'POI_ID': 'no label', 'FAC_TYPE': 'inline label', 'POI_NAME': 'no label', 'ST_NAME': 'no label', 'FAC_DESC': 'header label', 'FOOD_TYPE': 'no label', });
lyr_TradeAreasPOI_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});