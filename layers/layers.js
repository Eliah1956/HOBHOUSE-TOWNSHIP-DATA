ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32736").setExtent([455437.840127, 7898791.500566, 462755.798005, 7903837.545715]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reservoir_1 = new ol.format.GeoJSON();
var features_Reservoir_1 = format_Reservoir_1.readFeatures(json_Reservoir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Reservoir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoir_1.addFeatures(features_Reservoir_1);
var lyr_Reservoir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservoir_1, 
                style: style_Reservoir_1,
                popuplayertitle: 'Reservoir',
                interactive: true,
                title: '<img src="styles/legend/Reservoir_1.png" /> Reservoir'
            });
var format_hobhouseboundary_2 = new ol.format.GeoJSON();
var features_hobhouseboundary_2 = format_hobhouseboundary_2.readFeatures(json_hobhouseboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_hobhouseboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hobhouseboundary_2.addFeatures(features_hobhouseboundary_2);
var lyr_hobhouseboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hobhouseboundary_2, 
                style: style_hobhouseboundary_2,
                popuplayertitle: 'hobhouse boundary',
                interactive: true,
                title: '<img src="styles/legend/hobhouseboundary_2.png" /> hobhouse boundary'
            });
var format_Waterlines_3 = new ol.format.GeoJSON();
var features_Waterlines_3 = format_Waterlines_3.readFeatures(json_Waterlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Waterlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterlines_3.addFeatures(features_Waterlines_3);
var lyr_Waterlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterlines_3, 
                style: style_Waterlines_3,
                popuplayertitle: 'Waterlines',
                interactive: true,
                title: '<img src="styles/legend/Waterlines_3.png" /> Waterlines'
            });
var format_Waterfittings_4 = new ol.format.GeoJSON();
var features_Waterfittings_4 = format_Waterfittings_4.readFeatures(json_Waterfittings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Waterfittings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterfittings_4.addFeatures(features_Waterfittings_4);
var lyr_Waterfittings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterfittings_4, 
                style: style_Waterfittings_4,
                popuplayertitle: 'Water fittings',
                interactive: true,
                title: '<img src="styles/legend/Waterfittings_4.png" /> Water fittings'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Reservoir_1.setVisible(true);lyr_hobhouseboundary_2.setVisible(true);lyr_Waterlines_3.setVisible(true);lyr_Waterfittings_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Reservoir_1,lyr_hobhouseboundary_2,lyr_Waterlines_3,lyr_Waterfittings_4];
lyr_Reservoir_1.set('fieldAliases', {'id': 'id', });
lyr_hobhouseboundary_2.set('fieldAliases', {'id': 'id', });
lyr_Waterlines_3.set('fieldAliases', {'id': 'id', 'material': 'material', 'Pipe Size': 'Pipe Size', 'Age': 'Age', 'Reservoir': 'Reservoir', 'R Capacity': 'R Capacity', 'R lifespan': 'R lifespan', 'AClifespan': 'AClifespan', 'R Age': 'R Age', 'Ownership': 'Ownership', 'W_Quality': 'W_Quality', 'Supply_hrs': 'Supply_hrs', 'Maintenanc': 'Maintenanc', 'Flow_Rate': 'Flow_Rate', 'Water_type': 'Water_type', 'D_Center': 'D_Center', 'W_Source': 'W_Source', 'T_Plant': 'T_Plant', });
lyr_Waterfittings_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'SIZE': 'SIZE', });
lyr_Reservoir_1.set('fieldImages', {'id': 'TextEdit', });
lyr_hobhouseboundary_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Waterlines_3.set('fieldImages', {'id': 'TextEdit', 'material': 'TextEdit', 'Pipe Size': 'TextEdit', 'Age': '', 'Reservoir': '', 'R Capacity': '', 'R lifespan': '', 'AClifespan': '', 'R Age': '', 'Ownership': '', 'W_Quality': '', 'Supply_hrs': '', 'Maintenanc': '', 'Flow_Rate': '', 'Water_type': '', 'D_Center': '', 'W_Source': '', 'T_Plant': '', });
lyr_Waterfittings_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Reservoir_1.set('fieldLabels', {'id': 'no label', });
lyr_hobhouseboundary_2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Waterlines_3.set('fieldLabels', {'id': 'inline label - always visible', 'material': 'inline label - always visible', 'Pipe Size': 'inline label - always visible', 'Age': 'inline label - always visible', 'Reservoir': 'inline label - always visible', 'R Capacity': 'inline label - always visible', 'R lifespan': 'inline label - always visible', 'AClifespan': 'inline label - always visible', 'R Age': 'inline label - always visible', 'Ownership': 'inline label - always visible', 'W_Quality': 'inline label - always visible', 'Supply_hrs': 'inline label - always visible', 'Maintenanc': 'inline label - always visible', 'Flow_Rate': 'inline label - always visible', 'Water_type': 'inline label - always visible', 'D_Center': 'inline label - always visible', 'W_Source': 'inline label - always visible', 'T_Plant': 'inline label - always visible', });
lyr_Waterfittings_4.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - visible with data', 'SIZE': 'inline label - always visible', });
lyr_Waterfittings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});