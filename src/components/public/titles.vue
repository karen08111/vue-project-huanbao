<template>
	<div class="title-name">
		<div class="t-n-title">{{titleName}}</div>
		<p class="t-n-sub">{{subtitle}}</p>
		<p class="t-n-intr" v-if="intr">{{intr}}</p>
		<p class="about-content1" v-if="listContent1">
			{{listContent1}}
		</p>
		<p class="about-content2" v-if="listContent1">
			{{listContent2}}
		</p>
	</div>
</template>

<script>
	export default{
		props:{
			titleName:{
				type:String
			},
			subtitle:{
				type:String
			},
			intr:{
				type:String
			},
			listContent1:{
				type:String
			},
			listContent2:{
				type:String
			}
		}
	}
</script>

<style scoped>
	.about-content1,.about-content2{
		font-size: 12px;
	    /*color: #5a5a5a;*/
	    width: 90%;
	    line-height: 20px;
	}
	.about-content1{
		margin-top: 30px;
	}
	.title-name{
		width: 100%;
		margin-top: 40px;
		text-align: center;
	}
	.t-n-title{
		font-size: 20px;
		font-weight: bold;
		color: rgb(107, 185, 15);
	}
	.t-n-sub{
		font-size: 14px;
	    text-transform: uppercase;
	    color: rgb(204, 204, 204);
	    margin-top: 10px;
	}
	.t-n-intr{
		color: rgb(67, 67, 67);
		font-size: 12px;
		margin-top: 15px;
	}
</style>