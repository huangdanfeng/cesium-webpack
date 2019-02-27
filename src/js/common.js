import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';

var viewer = new Cesium.Viewer('cesiumContainer',{
    animation: true,    //创建“动画”窗口小部件
    baseLayerPicker: true,  //图层选择器
    fullscreenButton: true, //全屏按钮
    vrButton: true,  //vr模式按钮
    geocoder: true,  //搜索按钮
    homeButton: true,   //视觉返回初始位置
    infoBox: false,
    sceneModePicker: true,   //视觉选择器
    selectionIndicator: false,
    timeline: true,    //时间线
    navigationHelpButton: true,  //导航帮助按钮
    navigationInstructionsInitiallyVisible: false, //导航帮助按钮下拉框true为默认可见
    scene3DOnly: false,  //视觉选择器只展示3d效果
    shouldAnimate: true, //时间默认会动
    terrainProvider: Cesium.createWorldTerrain(),  //高分辨率全球地形资产
    clockViewModel: new Cesium.ClockViewModel(new Cesium.Clock({    //跟踪模拟时间
        startTime : Cesium.JulianDate.fromIso8601("2018-12-25"),   //开始时间
        currentTime : Cesium.JulianDate.fromIso8601("2018-12-25"),  //当前时间
        stopTime : Cesium.JulianDate.fromIso8601("2018-12-26"),     //停止时间
        clockRange : Cesium.ClockRange.LOOP_STOP,             //时钟循环
        clockStep : Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER, //
        multiplier: 4000,   //调用时间的快慢
        shouldAnimate: true  //允许动画
    }))
});
viewer.scene.globe.enableLighting = true;  //光照效果
viewer._bottomContainer.style.display = 'none'; //隐藏信用