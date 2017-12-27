<template>
  <div id="app">
   	<!--echarts封装-->
		<ep-echart :config="echartConfig" :option="echartData" style="height: 600px;"></ep-echart>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
