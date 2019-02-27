import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';

var viewer = new Cesium.Viewer('square');


var wyoming = viewer.entities.add({
    name : 'Wyoming', //名称，不是唯一的
    id: "hhh", //唯一的，如果未提供，则自动生成GUID
    polygon : { //实体多边形
        hierarchy : Cesium.Cartesian3.fromDegreesArray([//多边形结构数组
            -109.080842,45.002073,
            -105.91517,45.002073,
            -104.058488,44.996596,
            -104.053011,43.002989,
            -104.053011,41.003906,
            -105.728954,40.998429,
            -107.919731,41.003906,
            -109.04798,40.998429,
            -111.047063,40.998429,
            -111.047063,42.000709,
            -111.047063,44.476286,
            -111.05254,45.002073]),
        height : 200, //高度
        material : Cesium.Color.RED.withAlpha(0.5), //填充材质
        outline : true, //边框
        outlineColor : Cesium.Color.BLACK, //边框颜色
    },
    description:'<p>哈哈哈</p>' //实体的html描述
});
var heading = Cesium.Math.toRadians(90);
var pitch = Cesium.Math.toRadians(-30);
//viewer.zoomTo(wyoming, new Cesium.HeadingPitchRange(heading, pitch));

/*
viewer.flyTo(wyoming).then(function(result){
    console.log(result);
    if (result) {
        viewer.selectedEntity = wyoming;
    }
});*/
wyoming.position = Cesium.Cartesian3.fromDegrees(-107.724, 42.68); //实体位置
viewer.trackedEntity = wyoming; //设置摄像头跟踪的entity实例