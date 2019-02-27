import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
import che from './facilities/facilities.kml'

var viewer = new Cesium.Viewer('crane');

viewer.dataSources.add(Cesium.KmlDataSource.load(che,{
    camera : viewer.scene.camera,
    canvas : viewer.scene.canvas
}));

