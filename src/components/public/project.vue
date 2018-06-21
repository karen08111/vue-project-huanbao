<template>
	<div class="project-case" @click="ready()" >
		<img :src="src"/>
		<p class="project-p">{{title}}</p>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String
			},
			src:{
				type:String
			},
			index:{
				type:Number,
				default:0
			},
			lid:{
				type:Number
			}
		},
		methods:{
			ready(){
//				console.log(this.index,this.lid);
				this.$router.push('../caseDetail/'+this.index+'/'+this.lid);
				
			}
		}
	}
</script>

<style>
	.project-case{
		width: 280px;
		height: 220px;
		margin-right: 20px;
		margin-bottom: 30px;
		float: left;
	}
	.project-case img{
		width: 280px;
		height: 170px;
	}
	.project-p{
		color: #434343;
	    display: block;
	    cursor: pointer;
	    text-align: center;
	    font-size: 14px;
	    margin-top: 15px;
	}
</style>