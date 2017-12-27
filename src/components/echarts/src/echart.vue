
<template>
	<div :id="ehcartId"></div>
</template>

<script>
	var echarts = require('echarts');
	let instance = null;
	export default {
		name:'epEchart',
		props:{
			config:{
				type:Object,
				default:function(){
					return {
						theme:'default',
						event:{}
					}
				}
			},
			option:{
				type:Object
			}
		},
		watch:{
			config(newVal){
				this.refreshEchart();
			},
			option(newVal){
				this.refreshEchart();
			}
		},
		data(){
			return {
				echartInstance:null,
				ehcartId:new Date().getTime()
			};
		},
		methods: {
			refreshEchart(){
				instance = echarts.init(this.$el)
				instance.setOption(this.option);
				
				//屏幕大小调整，自动缩放大小
				let _this = this;
				window.onresize = function() {
		          instance.resize(); 
		        }
				
				//是否有绑定事件
				if(this.config.event){
					Object.keys(this.config.event).forEach(function(value){
						instance.on(value,_this.config.event[value])
					})
				}
			}
		},
		mounted:function(){
			this.refreshEchart()
		}
	}
</script>

<style>

</style>