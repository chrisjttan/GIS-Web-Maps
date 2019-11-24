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
var format_35kmBuffer_1 = new ol.format.GeoJSON();
var features_35kmBuffer_1 = format_35kmBuffer_1.readFeatures(json_35kmBuffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35kmBuffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35kmBuffer_1.addFeatures(features_35kmBuffer_1);
var lyr_35kmBuffer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_35kmBuffer_1, 
                style: style_35kmBuffer_1,
                interactive: true,
                title: '<img src="styles/legend/35kmBuffer_1.png" /> 3.5kmBuffer'
            });
var format_30kmBuffer_2 = new ol.format.GeoJSON();
var features_30kmBuffer_2 = format_30kmBuffer_2.readFeatures(json_30kmBuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30kmBuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30kmBuffer_2.addFeatures(features_30kmBuffer_2);
var lyr_30kmBuffer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_30kmBuffer_2, 
                style: style_30kmBuffer_2,
                interactive: true,
                title: '<img src="styles/legend/30kmBuffer_2.png" /> 3.0kmBuffer'
            });
var format_25kmBuffer_3 = new ol.format.GeoJSON();
var features_25kmBuffer_3 = format_25kmBuffer_3.readFeatures(json_25kmBuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25kmBuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25kmBuffer_3.addFeatures(features_25kmBuffer_3);
var lyr_25kmBuffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_25kmBuffer_3, 
                style: style_25kmBuffer_3,
                interactive: true,
                title: '<img src="styles/legend/25kmBuffer_3.png" /> 2.5kmBuffer'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_35kmBuffer_1.setVisible(true);lyr_30kmBuffer_2.setVisible(true);lyr_25kmBuffer_3.setVisible(true);lyr_TradeAreas_4.setVisible(true);lyr_TaiwanStores_5.setVisible(true);lyr_TradeAreasPOI_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_35kmBuffer_1,lyr_30kmBuffer_2,lyr_25kmBuffer_3,lyr_TradeAreas_4,lyr_TaiwanStores_5,lyr_TradeAreasPOI_6];
lyr_35kmBuffer_1.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Store_Code': 'Store_Code', 'POD_Code': 'POD_Code', });
lyr_30kmBuffer_2.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Store_Code': 'Store_Code', 'POD_Code': 'POD_Code', });
lyr_25kmBuffer_3.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Store_Code': 'Store_Code', 'POD_Code': 'POD_Code', });
lyr_TradeAreas_4.set('fieldAliases', {'fid': 'fid', 'Store Code': 'Store Code', 'POD Code': 'POD Code', });
lyr_TaiwanStores_5.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'open date': 'open date', 'close date': 'close date', 'fid_2': 'fid_2', 'Store Code': 'Store Code', 'POD Code': 'POD Code', });
lyr_TradeAreasPOI_6.set('fieldAliases', {'LINK_ID': 'LINK_ID', 'POI_ID': 'POI_ID', 'FAC_TYPE': 'FAC_TYPE', 'POI_NAME': 'POI_NAME', 'ST_NAME': 'ST_NAME', 'FAC_DESC': 'FAC_DESC', 'FOOD_TYPE': 'FOOD_TYPE', });
lyr_35kmBuffer_1.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Store_Code': 'TextEdit', 'POD_Code': 'TextEdit', });
lyr_30kmBuffer_2.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Store_Code': 'TextEdit', 'POD_Code': 'TextEdit', });
lyr_25kmBuffer_3.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Store_Code': 'TextEdit', 'POD_Code': 'TextEdit', });
lyr_TradeAreas_4.set('fieldImages', {'fid': 'TextEdit', 'Store Code': 'TextEdit', 'POD Code': 'TextEdit', });
lyr_TaiwanStores_5.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'open date': 'TextEdit', 'close date': 'TextEdit', 'fid_2': 'TextEdit', 'Store Code': 'TextEdit', 'POD Code': 'TextEdit', });
lyr_TradeAreasPOI_6.set('fieldImages', {'LINK_ID': '', 'POI_ID': '', 'FAC_TYPE': '', 'POI_NAME': '', 'ST_NAME': '', 'FAC_DESC': '', 'FOOD_TYPE': '', });
lyr_35kmBuffer_1.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'Store_Code': 'no label', 'POD_Code': 'no label', });
lyr_30kmBuffer_2.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'Store_Code': 'no label', 'POD_Code': 'no label', });
lyr_25kmBuffer_3.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'Store_Code': 'no label', 'POD_Code': 'no label', });
lyr_TradeAreas_4.set('fieldLabels', {'fid': 'no label', 'Store Code': 'header label', 'POD Code': 'inline label', });
lyr_TaiwanStores_5.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'open date': 'no label', 'close date': 'no label', 'fid_2': 'no label', 'Store Code': 'header label', 'POD Code': 'inline label', });
lyr_TradeAreasPOI_6.set('fieldLabels', {'LINK_ID': 'no label', 'POI_ID': 'no label', 'FAC_TYPE': 'inline label', 'POI_NAME': 'no label', 'ST_NAME': 'no label', 'FAC_DESC': 'header label', 'FOOD_TYPE': 'no label', });
lyr_TradeAreasPOI_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});