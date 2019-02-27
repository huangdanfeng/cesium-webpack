import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
import che from './json/Cesium_Man.glb'

var viewer = new Cesium.Viewer('moveCar', {shouldAnimate : true});
var scene = viewer.scene;
viewer.extend(Cesium.viewerCesiumInspectorMixin); //可视化坐标系

//创建一个局部东 - 北 - 向上坐标系
var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.02804946899414, 0.0));
var model = scene.primitives.add(Cesium.Model.fromGltf({
    name: "1",
    url : che,    //实物地址
    modelMatrix : modelMatrix,
    scale : 200.0  //实物放大
}));

//模型准备好呈现时添加动画
Cesium.when(model.readyPromise).then(function(model) {
    model.activeAnimations.addAll({
        loop : Cesium.ModelAnimationLoop.REPEAT, //动画循环
        speedup : 50,  //播放速度
        reverse : false  //播放方向
    });
});

//设置相机视角
viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.0180494689414, 1000.0), // 设置位置

    orientation: {
        heading : Cesium.Math.toRadians(20.0), // 方向
        pitch : Cesium.Math.toRadians(-20.0),// 倾斜角度
        roll : 0      //滚动
    }
});
