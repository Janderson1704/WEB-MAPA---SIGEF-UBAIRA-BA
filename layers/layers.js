var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IMVEISCERTIFICADOSDEUBAIRA_3 = new ol.format.GeoJSON();
var features_IMVEISCERTIFICADOSDEUBAIRA_3 = format_IMVEISCERTIFICADOSDEUBAIRA_3.readFeatures(json_IMVEISCERTIFICADOSDEUBAIRA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMVEISCERTIFICADOSDEUBAIRA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMVEISCERTIFICADOSDEUBAIRA_3.addFeatures(features_IMVEISCERTIFICADOSDEUBAIRA_3);
var lyr_IMVEISCERTIFICADOSDEUBAIRA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMVEISCERTIFICADOSDEUBAIRA_3, 
                style: style_IMVEISCERTIFICADOSDEUBAIRA_3,
                popuplayertitle: 'IMÓVEIS CERTIFICADOS DE UBAIRA',
                interactive: true,
                title: '<img src="styles/legend/IMVEISCERTIFICADOSDEUBAIRA_3.png" /> IMÓVEIS CERTIFICADOS DE UBAIRA'
            });
var format_LIMITEMUNICIPALDEUBAIRA_4 = new ol.format.GeoJSON();
var features_LIMITEMUNICIPALDEUBAIRA_4 = format_LIMITEMUNICIPALDEUBAIRA_4.readFeatures(json_LIMITEMUNICIPALDEUBAIRA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITEMUNICIPALDEUBAIRA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITEMUNICIPALDEUBAIRA_4.addFeatures(features_LIMITEMUNICIPALDEUBAIRA_4);
var lyr_LIMITEMUNICIPALDEUBAIRA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITEMUNICIPALDEUBAIRA_4, 
                style: style_LIMITEMUNICIPALDEUBAIRA_4,
                popuplayertitle: 'LIMITE MUNICIPAL DE UBAIRA',
                interactive: true,
                title: '<img src="styles/legend/LIMITEMUNICIPALDEUBAIRA_4.png" /> LIMITE MUNICIPAL DE UBAIRA'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_IMVEISCERTIFICADOSDEUBAIRA_3.setVisible(true);lyr_LIMITEMUNICIPALDEUBAIRA_4.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OSMStandard_1,lyr_GoogleSatellite_2,lyr_IMVEISCERTIFICADOSDEUBAIRA_3,lyr_LIMITEMUNICIPALDEUBAIRA_4];
lyr_IMVEISCERTIFICADOSDEUBAIRA_3.set('fieldAliases', {'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_LIMITEMUNICIPALDEUBAIRA_4.set('fieldAliases', {'FID': 'FID', });
lyr_IMVEISCERTIFICADOSDEUBAIRA_3.set('fieldImages', {'parcela_co': '', 'rt': '', 'art': '', 'situacao_i': '', 'codigo_imo': '', 'data_submi': '', 'data_aprov': '', 'status': '', 'nome_area': '', 'registro_m': '', 'registro_d': '', 'municipio_': '', 'uf_id': '', });
lyr_LIMITEMUNICIPALDEUBAIRA_4.set('fieldImages', {'FID': '', });
lyr_IMVEISCERTIFICADOSDEUBAIRA_3.set('fieldLabels', {'parcela_co': 'no label', 'rt': 'hidden field', 'art': 'hidden field', 'situacao_i': 'hidden field', 'codigo_imo': 'no label', 'data_submi': 'hidden field', 'data_aprov': 'hidden field', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'hidden field', 'registro_d': 'hidden field', 'municipio_': 'hidden field', 'uf_id': 'hidden field', });
lyr_LIMITEMUNICIPALDEUBAIRA_4.set('fieldLabels', {'FID': 'no label', });
lyr_LIMITEMUNICIPALDEUBAIRA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});