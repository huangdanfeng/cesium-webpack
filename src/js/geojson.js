import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
//import json from './ne_10m_us_states.topojson'
import json from './json/china.geojson'

var viewer = new Cesium.Viewer('geojson');
var model = viewer.dataSources.add(Cesium.GeoJsonDataSource.load(json, {
    stroke: Cesium.Color.HOTPINK,  //画线颜色
    fill: Cesium.Color.PINK,  //填充颜色
    strokeWidth: 3,     //线的宽度
}));

Cesium.when(model).then(function(model) {
var entities = model.entities.values;
entities.forEach(index => {
    index.polygon.extrudedHeight = index.properties.childNum * 30000.0;  //多边形实体高度
    index.polygon.material = Cesium.Color.fromRandom({alpha: 1.0});   //多边形颜色
    index.polygon.outline = false;   //多边形边框
    var a = index.properties.name;
    index.description = '<p>name: '+ a +'</p><p>population: ' +
        index.properties.childNum + '人</p>';   //提示
    console.log(index)
})
});

viewer.flyTo(model);
