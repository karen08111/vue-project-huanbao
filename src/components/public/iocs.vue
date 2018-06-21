<template>
	<div class="about-ioc">
		<img :src="src"/>
		<p class="ioc-t-name">{{title}}</p>
		<p class="ioc-t-sub">{{subTitle}}</p>
	</div>
</template>

<script>
	export default{
		props:{
			src:{
				type:String
			},
			title:{
				type:String
			},
			subTitle:{
				type:String
			}
		}
	}
</script>

<style>
	.about-ioc{
		width: 150px;
		height: 150px;
		line-height: 30px;
		padding-top: 20px;
		box-sizing: border-box;
		/*margin-top: 10px;*/
		float: left;
		margin-right: 30px;
	}
	.about-ioc img{
		width: 44px;
		height: 44px;
	}
	.ioc-t-name{
		font-size: 20px;
		font-weight: bold;
		color: black;
		margin-top: 6px;
	}
	.ioc-t-sub{
		font-size: 16px;
	    color: rgb(102, 102, 102);
	}
	
</style>