<template>
	<div class="lader">
		<p class="lader-title"><span>招聘职位:</span><span>{{title}}</span></p>
		<p class="lader-content">
			{{subtitle}}
		</p>
		<p class="lader-intr"><span>薪资:</span><span>{{pay}}</span></p>
		<p class="lader-intr"><span>地址:</span><span>{{loca}}</span></p>
		<p class="lader-intr"><span>联系电话:</span><span></span>{{tel}}</p>
		<p class="lader-intr"><span>简历发至:</span><span>{{resume}}</span></p>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String
			},
			subtitle:{
				type:String
			},
			pay:{
				type:String
			},
			loca:{
				type:String
			},
			tel:{
				type:String
			},
			resume:{
				type:String
			}
		}
	}
</script>

<style scoped>
	.lader{
		width: 100%;
		height: 250px;
		margin-top: 30px;
	}
	.lader-title{
		width: 100%;
		height: 45px;
		font-size: 22px;
		font-weight: 900;
		border-bottom: 1px dashed gainsboro;
		line-height: 45px;
	}
	.lader-content{
		width: 100%;
		height: 61px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;
		font-size: 14px;
		color: rgb(102, 102, 102);
		line-height: 28px;
		margin-bottom: 20px;
		margin-top: 10px;
	}
	.lader-intr{
		color: rgb(102, 102, 102);
		font-size: 14px;
		margin-top: 10px;
	}
	.lader-intr :first-child{
		display: block;
		float: left;
		width:64px;
	}
</style>