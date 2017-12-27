<template>
  <div id="app">
   	<!--echarts封装-->
		<ep-echart class="echart" :config="echartConfig" :option="echartData"></ep-echart>
		<ep-echart class="echart" :config="echartConfig" :option="echartData2"></ep-echart>
		<ep-echart class="echart" :config="echartConfig" :option="echartData3"></ep-echart>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	newData:null,
    	echartConfig:{
					event:{
						click:function(params){
							alert('您点击的是: '+params.name);
						}
					}
				},
				echartData:{
				    title: {
				        text: 'ECharts 入门示例'
				    },
				    tooltip: {},
				    xAxis: {
				        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				    },
				    yAxis: {},
				    series: [{
				        name: '销量',
				        type: 'bar',
				        data: [5, 20, 36, 10, 10, 20]
				    }]
				},
				echartData2:{
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
				},
				echartData3:{
			    title: {
			        text: '堆叠区域图'
			    },
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            label: {
			                backgroundColor: '#6a7985'
			            }
			        }
			    },
			    legend: {
			        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'邮件营销',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'直接访问',
			            type:'line',
			            stack: '总量',
			            areaStyle: {normal: {}},
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'搜索引擎',
			            type:'line',
			            stack: '总量',
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
			            areaStyle: {normal: {}},
			            data:[820, 932, 901, 934, 1290, 1330, 1320]
			        }
			    ]
				}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.echart {
	height: 400px;
}
</style>
