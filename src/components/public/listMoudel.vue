<template>
	<div class="list-moudel" @click="modelJump()">
		<div class="list-m-img">
			<img :src="src" class="absolute"/>
			<p class="list-m-name">{{title}}</p>
		</div>
		<div class="list-content">
			{{intr}}
		</div>
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
			intr:{
				type:String
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			modelJump(){
				this.$router.push('../projectCase');
			}
		}
	}
</script>

<style scoped>
	.list-moudel{
		width: 270px;
		height: 320px;
		background: #f9f9f9;
		position: relative;
		margin-left: 40px;
		cursor: pointer;
	}
	.list-moudel:hover{
		background: #43434336;
	}
	.list-m-img{
		width: 80px;
		height: 80px;
		border: 2px solid #4bf957;
		border-radius: 50%;
		position: absolute;
		top: 50px;
		left: 93px;
	}
	.list-m-img img{
		width: 50px;
		height: 50px;
	}
	.list-m-name{
		font-size: 18px;
    	color: rgb(0, 0, 0);
    	font-weight: bold;
    	margin-top: 100px;
    	text-align: center;
	}
	.list-content{
		width: 206px;
		height: 73px;
		font-size: 12px;
		color: rgb(102, 102, 102);
		position: absolute;
		bottom: 50px;
		left: 35px;
		line-height: 20px;
	}
</style>