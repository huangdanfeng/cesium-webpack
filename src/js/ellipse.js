import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
import feng from './json/a.jpg'

var viewer = new Cesium.Viewer('ellipse');


var entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
    ellipse : {
        semiMinorAxis : 150000.0,   //半长轴
        semiMajorAxis : 200000.0,  //半短轴
        extrudedHeight: 6000,     //高度
        material : Cesium.Color.BLUE.withAlpha(0.5)  //填充材质
    },
    /*billboard : {
        image : feng,  //标签图片
        width : 64,
        height : 64,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM, //位置
        pixelOffset : new Cesium.Cartesian2(0, -39)   //偏移
    },*/
    point : {
        pixelSize : 5,   //圆点大小
        color : Cesium.Color.RED,  //颜色
        outlineColor : Cesium.Color.WHITE, //线颜色
        outlineWidth : 2  //线长度
    },
    label : {
        text : 'Citizens Bank Park',   //标签
        font : '14pt monospace', //大小
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,//样式
        outlineWidth : 2, //轮廓的宽度
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM, //位置
        pixelOffset : new Cesium.Cartesian2(0, -9) //偏移
    }
});
var ellipse = entity.ellipse; // For upcoming examples
ellipse.material = feng;
//边框
/*ellipse.fill = false;
ellipse.outline = true;
ellipse.outlineColor = Cesium.Color.YELLOW;
ellipse.outlineWidth = 2.0;*/
viewer.zoomTo(entity);
