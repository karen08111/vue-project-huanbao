<template>
	<div class="head-imgs">
		<div class="head-content">
			<div class="head-neirong absolute">
				<p>{{headImg.title}}</p>
				<h1>{{headImg.subTitle}}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				headImg:'',//
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.headImg=data.data.headImg;
			})
			
		}
	}
</script>

<style scoped>
	.head-imgs{
		width: 100%;
		height: 450px;
		background: url(../../../static/img/bn2.jpg) no-repeat center center;
		background-size: 100%;
	}
	.head-content{
		width: 1200px;
		height: 100%;
		margin: auto;
		position: relative;
	}
	.head-neirong{
		width: 800px;
		height: 140px;
		background-color: #00000033;
		text-align: center;
		color: #FFFFFF;
		line-height: 45px;
	}
	.head-neirong p{
		font-size: 16px;
		margin-top: 15px;
		
	}
	.head-neirong h1{
		font-size: 40px;
		font-weight: bold;
	}
</style>