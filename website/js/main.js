/**
 ********************************全局变量定义********************************
 */
var TAIWAN = new BMap.Point(119.25,24.09)                           // 显示热力图时地图的中心坐标
var WUHAN = new BMap.Point(114.45,30.62)                            // 显示动态轨迹时地图的中心坐标

var heatLayer = null;                                               // 存储热力图的图层
var dynamicLayer = null;                                            // 对象，存放轨迹图层和动点图层

var lastPage = -1;                                                  // 上一次点击的页面序号

var startPoint = [                                                  // 记录五条轨迹的起始点坐标
    114.54893763517084,
    114.39707945566367,
    114.37796795969388,
    114.34341575585621,
    114.28670915124196
]     

// ***********************************************************************



/**
 ********************************工具函数定义********************************
 */
/**
 * 切换页面函数
 * @param {Number} page 点击的页面序号
 */
function handlePageChange(page){
    if(lastPage == page) return;
    lastPage = page;
    if(page == 2){  // 显示水域网格化
        $('#mapPage').hide();
        $('#gridPage').show();
        var i = 0;
        setInterval(() => {
            if(i >= vcro.length){
                window.clearInterval();
                showWarnning('413804393','413762577','东经114.485, 北纬30.6865')
                return;
            }
            gridInit(vcro[i],gridTrajectoryData[i]);
            i++;
        },2000);
    }else{
        hideWarnning();
        $('#gridPage').hide();
        $('#mapPage').show();
        if(page == 0){ // 显示热力图
            if(dynamicLayer) {
                dynamicLayer[0].hide();
                dynamicLayer[1].hide();
                hideShipInfo();
            }
            if(heatLayer){
                heatLayer.show();
            }
            else{
                drawHeatLayer(heatData);
            }  
            map.centerAndZoom(TAIWAN,9)
        }
        else{ // 显示轨迹动图
            if(heatLayer) 
                heatLayer.hide();
            if(dynamicLayer){
                dynamicLayer[0].show();
                dynamicLayer[1].show();
            }else{
                drawDynamicLayer(dynamicTrajectoryData,dynamicPointData);
            }
            map.centerAndZoom(WUHAN,13) 
        }
    }
}



/**
 * 显示船舶信息
 * 船舶信息在ship_info.js中定义
 * @param {*Number} index 点击的船舶轨迹编号，index∈[1,4]
 */
function showShipInfo(index){
    $('#shipInfo').show();
    var info = shipInfoData[index];
    for(var key in info){
        $(`#${key}`).text(info[key]);
    }
}

/**
 * 取消船舶信息的显示
 */
function hideShipInfo(){
    $('#shipInfo').hide();
}

/**
 * 显示碰撞预警信息
 * @param {*STRING} ship1 船1的MMSI
 * @param {*STRING} ship2 船2的MMSI
 * @param {*STRING} location 地点信息
 */
function showWarnning(ship1,ship2,location){
    $('#ship1').text(ship1);
    $('#ship2').text(ship2);
    $('#location').text(location);
    $('#warringTip').show();
}

function hideWarnning(){
    $('#warringTip').hide();
}

// ***********************************************************************



/**
 ********************************绘图函数定义********************************
 */

// 

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
    heatLayer = new mapv.baiduMapLayer(map, dataSet, options);
}

/**
 * 动态轨迹绘图函数
 * @param {*} trajectory 轨迹数据
 * @param {*} point 动点数据
 */
function drawDynamicLayer(trajectory,point){
    /*轨迹图层*/
    var trajectoryDataSet = new mapv.DataSet(trajectory);
    var options = {
        size:50,
        strokeStyle: 'white',
        globalCompositeOperation: 'lighter',
        shadowColor: 'blue',
        shadowBlur: 1.0,
        methods: {
            click: function (item) {
                // 获取点击船舶的编号
                var index = startPoint.indexOf(item.geometry.coordinates[0][0]);
                if(index > -1){// 如果是点击了轨迹，则显示船舶信息
                    showShipInfo(index);
                }
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
    dynamicLayer = [trajectoryLayer,pointLayer];
}

/**
 * 水域网格化函数
 */
function gridInit(vcroData,gridData){
    // 声明助手函数
    function renderItem(params, api) {
        function getCoord(params, api, lngIndex, latIndex) {
            var coords = params.context.coords || (params.context.coords = []);
            var key = lngIndex + '-' + latIndex;

            // bmap returns point in integer, which makes cell width unstable.
            // So we have to use right bottom point.
            return coords[key] || (coords[key] = api.coord([
                +(latExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6),
                +(lngExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6)
            ]));
        }
        var lngIndex = api.value(0);
        var latIndex = api.value(1);
        var pointLeftTop = getCoord(params, api, lngIndex, latIndex);
        var pointRightBottom = getCoord(params, api, lngIndex + 1, latIndex + 1);

        return {
            type: 'rect',
            shape: {
                x: pointLeftTop[0],
                y: pointLeftTop[1],
                width: pointRightBottom[0] - pointLeftTop[0],
                height: pointRightBottom[1] - pointLeftTop[1]
            },
            style: api.style({
                stroke: 'rgba(0,0,0,0.1)'
            }),
            styleEmphasis: api.styleEmphasis()
        };
    }

    var dom = document.getElementById("gridContainer");
    var gridChart = echarts.init(dom);

    // 不同危险等级的颜色
    var COLORS = ["#ffffff", "#67C23A", "#E6A23C", "#F56C6C","red"];

    var lngExtent = [30.682, 30.691];
    var latExtent = [114.479, 114.488];
    var cellCount = [30, 30];
    var cellSizeCoord = [
        (lngExtent[1] - lngExtent[0]) / cellCount[0],
        (latExtent[1] - latExtent[0]) / cellCount[1]
    ];

    // 地图配置
    var option = {
        tooltip: {},
        visualMap: {
            type: 'piecewise',
            inverse: false,
            top: 10,
            left: 10,
            pieces: [{
                value: 0, color: COLORS[0]
            }, {
                value: 1, color: COLORS[0]
            }, {
                value: 2, color: COLORS[1]
            }, {
                value: 3, color: COLORS[1]
            }, {
                value: 4, color: COLORS[2]
            }, {
                value: 5, color: COLORS[2]
            },{
                value: 6, color: COLORS[3]
            },{
                value: 7, color: COLORS[3]
            },{
                value: 8, color: COLORS[4]
            },{
                value: 9, color: COLORS[4]
            },{
                value: 10, color: COLORS[4]
            }],
            borderColor: '#ccc',
            borderWidth: 2,
            backgroundColor: '#eee',
            dimension: 2,
            inRange: {
                color: COLORS,
                opacity: 0.3
            }
        },
        series: [
            {   // 网格化的图层
                type: 'custom',
                coordinateSystem: 'bmap',
                renderItem,
                emphasis: {
                    itemStyle: {
                        color: 'yellow'
                    }
                },
                encode: {
                    tooltip: 2
                },
                data: vcroData  // 风险值的数据，在vcro.js中定义
            },
            
        ],
        bmap: {
            center: [114.485, 30.6865],
            zoom: 17,
            roam: false,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }]
            }
        }
    };

    gridChart.setOption(option);

    // 这里使用两个不同的echarts实例的原因：将两个图层放在一个实例中时，轨迹的颜色不能自主控制
    var traChart = echarts.init($('#traContainer')[0]);

    // 三条轨迹的颜色
    const traColor = ['#1482e5','#F4A460','	#43CD80'];

    traChart.setOption({
        bmap: {
            center: [114.485, 30.6865],
            zoom: 17,
            roam: false,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }]
            }
        },
        series:[
            {   // 网格中的轨迹图层
                type: 'lines',
                coordinateSystem: 'bmap',
                data: [gridData[0]],   // 轨迹的数据，在grid.js中定义
                polyline: true,
                lineStyle: {
                    opacity: 1,
                    width: 1,
                    color:traColor[0]
                },
                value:3,
            },
            {   // 网格中的轨迹图层
                type: 'lines',
                coordinateSystem: 'bmap',
                data: [gridData[1]],   // 轨迹的数据，在grid.js中定义
                polyline: true,
                lineStyle: {
                    opacity: 1,
                    width: 1,
                    color:traColor[1]
                },
                value:3,
            },
            {   // 网格中的轨迹图层
                type: 'lines',
                coordinateSystem: 'bmap',
                data: [gridData[2]],   // 轨迹的数据，在grid.js中定义
                polyline: true,
                lineStyle: {
                    opacity: 1,
                    width: 1,
                    color:traColor[2]
                },
                value:3,
            }
        ]
    })

}


// ***********************************************************************



// 创建地图实例，界面初始化
var map = new BMap.Map("map", {                     // 创建Map实例
    enableMapClick: false
});
map.enableScrollWheelZoom(true);                    // 开启鼠标滚轮缩放
map.centerAndZoom(WUHAN, 7);                        // 初始化地图,设置中心点坐标和地图级别