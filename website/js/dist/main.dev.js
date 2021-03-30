"use strict";

// 创建地图实例
var map = new BMap.Map("map", {
  // 创建Map实例
  enableMapClick: false
});
map.centerAndZoom(new BMap.Point(114.5, 30.5), 11); // 初始化地图,设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

/*****全局数据定义↓******/

var heatLayer = null; // 存储热力图的图层

var dynamicLayer = null; // 对象，存放轨迹图层和动点图层

/**
 * 切换页面函数
 * @param {Number} page 
 */

function handlePageChange(page) {
  if (page == 2) {
    $('#mapPage').hide();
    $('#gridPage').show();
  } else {
    $('#gridPage').hide();
    $('#mapPage').show();

    if (page == 0) {
      // 显示热力图
      if (dynamicLayer) dynamicLayer.hide();
      if (heatLayer) heatLayer.show();else heatLayer = drawHeatLayer(heatData);
    } else {
      // 显示轨迹动图
      if (heatLayer) heatLayer.hide();
      if (dynamicLayer) dynamicLayer.show();else dynamicLayer = drawDynamicLayer(dynamicTrajectoryData, dynamicPointData);
    }
  }
} // ***********************************************************************

/**
 * 热力图绘图函数
 * @param {Array} heatData 热力图数据
 * @returns 热力图图层
 */


function drawHeatLayer(heatData) {
  var dataSet = new mapv.DataSet(heatData);
  var options = {
    size: 3,
    gradient: {
      0.1: "rgb(0,255,255)",
      0.3: "rgb(0,255,0)",
      0.6: "yellow",
      0.8: "rgb(255,0,0)"
    },
    max: 100,
    // range: [0, 100], // 过滤显示数据范围
    // minOpacity: 0.5, // 热力图透明度
    // maxOpacity: 1,
    draw: 'heatmap'
  };
  var mapvLayerHeat = new mapv.baiduMapLayer(map, dataSet, options);
  return mapvLayerHeat;
}
/**
 * 动态轨迹绘图函数
 * @param {*} trajectory 轨迹数据
 * @param {*} point 动点数据
 * @returns {*Object} 轨迹图的两个图层
 */


function drawDynamicLayer(trajectory, point) {
  /*轨迹图层*/
  var trajectoryDataSet = new mapv.DataSet(trajectory);
  var options = {
    strokeStyle: 'white',
    //'rgb(55, 50, 250)',
    globalCompositeOperation: 'lighter',
    shadowColor: 'blue',
    //'rgb(55, 50, 250)',
    shadowBlur: 1.0,
    methods: {
      click: function click(item) {}
    },
    lineWidth: 2.0,
    draw: 'simple'
  };
  trajectoryLayer = new mapv.baiduMapLayer(map, trajectoryDataSet, options);
  /*动点图层*/

  var pointDataSet = new mapv.DataSet(point);
  var options = {
    fillStyle: 'rgb(255,0,0)',
    //动点颜色
    globalCompositeOperation: 'lighter',
    size: 2,
    animation: {
      type: 'time',
      stepsRange: {
        start: 0,
        end: 100
      },
      trails: 3,
      //点停留的时间
      duration: 5 //整个过程的时间

    },
    draw: 'simple'
  };
  pointLayer = new mapv.baiduMapLayer(map, pointDataSet, options);
  return {
    trajectoryLayer: trajectoryLayer,
    pointLayer: pointLayer
  };
} // ***********************************************************************