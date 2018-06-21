<template>
	<ul class="news-list fl">
		<li class="news-l-li" v-for="(l,key,index) in list" @click="jump(l.lid)">
			<span class="news-l-time fl">
				<b>{{l.mounth}}</b>
				<p>{{l.times}}</p>
			</span>
			<p class="new-l-title">{{l.title}}</p>
			<p class="new-l-subtitle">{{l.intr}}</p>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return{
				times:''//本机时间
			}
		},
		props:{
			list:{
				type:Array//新闻列表
			}
		},
		mounted(){
			var tt=this.getNowFormatDate();
			this.times=tt.slice(0,7);
		},
		methods:{
			jump(data){
				console.log(data);
			}
		}
	}
</script>

<style scoped>
	.news-list{
		width: 55%;
		height: 100%;
		color: #434343;
	}
	.news-l-li{
		width: 100%;
		height: 25%;
		border-bottom: 1px solid #eeeeee;
		padding-top: 20px;
		padding-bottom: 15px;
		padding-right: 20px;
		box-sizing: border-box;
	}
	.news-l-time{
		display: block;
		width: 100px;
		text-align: center;
		line-height: 25px;
		box-sizing: border-box;
	}
	.news-l-time b{
		font-weight: bold;
		font-size: 24px;
		color: #434343;
	}
	.news-l-time p{
		color: #434343;
    	font-size: 13px;
	}
	.news-l-title{
		font-size: 18px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.new-l-title:hover{
		color: rgb(135, 200, 68);
		cursor: pointer;
	}
	.new-l-subtitle{
		font-size: 12px;
		color: #999999;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-top: 5px;
		line-height: 15px;
	}
</style>