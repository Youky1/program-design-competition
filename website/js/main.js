
// 全局数据定义************************************************************

var TAIWAN = new BMap.Point(119.25,24.09)           // 显示热力图时地图的中心坐标
var WUHAN = new BMap.Point(114.45,30.62)            // 显示动态轨迹时地图的中心坐标

var heatLayer = null;                               // 存储热力图的图层
var dynamicLayer = null;                            // 对象，存放轨迹图层和动点图层

var lastPage = -1;                                  // 上一次点击的页面序号

// ***********************************************************************



// 工具函数定义************************************************************

/**
 * 切换页面函数
 * @param {Number} page 点击的页面序号
 */
function handlePageChange(page){
    if(lastPage == page) return;
    lastPage = page;
    if(page == 2){
        $('#mapPage').hide();
        $('#gridPage').show();
    }else{
        $('#gridPage').hide();
        $('#mapPage').show();
        if(page == 0){ // 显示热力图
            if(dynamicLayer) {
                dynamicLayer[0].destroy();
                dynamicLayer[1].destroy();
            }
            if(heatLayer){
                heatLayer.show();
            }
            else{
                heatLayer = drawHeatLayer(heatData);
            }  
            map.centerAndZoom(TAIWAN,9)
        }
        else{ // 显示轨迹动图
            if(heatLayer) 
                heatLayer.hide();
            dynamicLayer = drawDynamicLayer(dynamicTrajectoryData,dynamicPointData);
            map.centerAndZoom(WUHAN,13) 
        }
    }
}


// 绘图函数定义*************************************************************

/**
 * 热力图绘图函数
 * @param {Array} heatData 热力图数据
 * @returns 热力图图层
 */
function drawHeatLayer(heatData){
    var dataSet = new mapv.DataSet(heatData);
    var options = {
        size: 3,
        gradient: { 0.1: "rgb(0,255,255)", 0.3: "rgb(0,255,0)", 0.6: "yellow", 0.8: "rgb(255,0,0)"},
        max: 100,
        // range: [0, 100], // 过滤显示数据范围
        // minOpacity: 0.5, // 热力图透明度
        // maxOpacity: 1,
        draw: 'heatmap'
    }
    var mapvLayerHeat = new mapv.baiduMapLayer(map, dataSet, options);
    return mapvLayerHeat;
}

/**
 * 动态轨迹绘图函数
 * @param {*} trajectory 轨迹数据
 * @param {*} point 动点数据
 * @returns {*Array} 轨迹图的两个图层
 */
function drawDynamicLayer(trajectory,point){
    /*轨迹图层*/
    var trajectoryDataSet = new mapv.DataSet(trajectory);
    var options = {
        size:50,
        strokeStyle: 'white',//'rgb(55, 50, 250)',
        globalCompositeOperation: 'lighter',
        shadowColor: 'blue',//'rgb(55, 50, 250)',
        shadowBlur: 1.0,
        methods: {
            click: function (item) {
                console.log(item.geometry.coordinates[0])
            }
        },
        lineWidth: 2.0,
        draw: 'simple'
    }
    var trajectoryLayer = new mapv.baiduMapLayer(map, trajectoryDataSet, options);

    /*动点图层*/
    var pointDataSet = new mapv.DataSet(point);
    var pointOptions = {
        fillStyle: 'rgb(255,0,0)',//动点颜色
        globalCompositeOperation: 'lighter',
        size: 2,
        animation: {
            type: 'time',
            stepsRange: {
                start: 0,
                end: 50
            },
            trails: 2,//点停留的时间
            duration: 4,//整个过程的时间
        },
        draw: 'simple'
    }
    var pointLayer = new mapv.baiduMapLayer(map, pointDataSet, pointOptions);
    return [trajectoryLayer,pointLayer];
}

// ***********************************************************************



// 创建地图实例，界面初始化
var map = new BMap.Map("map", {                     // 创建Map实例
    enableMapClick: false
});
map.enableScrollWheelZoom(true);                    // 开启鼠标滚轮缩放
map.centerAndZoom(WUHAN, 7);                        // 初始化地图,设置中心点坐标和地图级别

