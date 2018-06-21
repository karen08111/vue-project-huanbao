<template>
	<div>
		<li class="news-l-li" v-for="(n,key,index) in ns" :key="n.lid">
			<span class="news-l-time fl">
				<b>{{n.mounth}}</b>
				<p>{{n.times}}</p>
			</span>
			<p class="new-l-title" @click="jump(indexs,n.lid)">{{n.title}}</p>
			<p class="new-l-subtitle">{{n.intr}}</p>
		</li>
	</div>
</template>

<script>
	export default{
		props:{
			ns:{
				type:Array
			},
			indexs:{
				type:Number//传过来的哪个数组索引
			}
		},
		methods:{
			jump(num,data){
//				console.log(num);
//				console.log(data);
				this.$router.push('../details/'+num+'/'+data);
			}
		}
	}
</script>

<style scoped>
	.news-l-li{
		width: 90%;
		height: 25%;
		border-bottom: 1px solid #eeeeee;
		padding-top: 20px;
		padding-bottom: 15px;
		padding-right: 20px;
		box-sizing: border-box;
		margin: auto;
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