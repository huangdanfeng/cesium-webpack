import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
import che from './json/GroundVehicle.glb'

var viewer = new Cesium.Viewer('car');

var position = Cesium.Cartesian3.fromDegrees(1216403.8845586285, -4736357.493351395, 4081299.715698949);
//var position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706);
var heading = Cesium.Math.toRadians(45.0); //方向
var pitch = Cesium.Math.toRadians(0.0); //倾斜
var roll = Cesium.Math.toRadians(0.0);
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(1216403.8845586285, -4736357.493351395, 4081299.715698949),
    //orientation:Cesium.Transforms.headingPitchRollQuaternion(position, new Cesium.HeadingPitchRoll(heading, pitch, roll)),
    orientation:new Cesium.HeadingPitchRoll(4.2892217081808806, -0.4799070147502502, 6.279789177843313),
    //orientation:new Cesium.HeadingPitchRoll(heading, pitch, roll),
    endTransform: Cesium.Matrix4.IDENTITY,
    model : {
        uri : che //模型URL
    }
});
viewer.trackedEntity = entity;
//监听鼠标左键点击事件
viewer.screenSpaceEventHandler.setInputAction(function(movement){
    //获取具有primitives属性的对象
    var feature = viewer.scene.pick(movement.position);
    console.log(feature)
},Cesium.ScreenSpaceEventType.LEFT_CLICK);