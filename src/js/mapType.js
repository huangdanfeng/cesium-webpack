import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';

var viewer = new Cesium.Viewer('mapType', {
    imageryProvider : new Cesium.ArcGisMapServerImageryProvider({//由ArcGIS MapServer托管的平铺图像
        url : '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    }),
    baseLayerPicker : false //隐藏图层选择器
});