<template>
	<div class="nav-full">
		<div class="nav-title fl">
			<p>
				<span class="nav-title-span" @click="index()">首页</span>
				<span style="color: rgb(204, 204, 204);">&gt;&gt;</span>
				<span class="nav-title-span" @click="dangqian()">{{names}}</span>
			</p>
		</div>
		<ul class="nav-list fl">
			<router-link :to="one"><li>{{name1}}</li></router-link>
			<router-link :to="two"><li>{{name2}}</li></router-link>
			<router-link :to="three"><li>{{name3}}</li></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			names:{
				type:String
			},
			iss:{
				type:String
			},
			one:{
				type:String
			},
			two:{
				type:String
			},
			three:{
				type:String
			},
			name1:{
				type:String
			},
			name2:{
				type:String
			},
			name3:{
				type:String
			}
		},
		methods:{
			index(){
				this.$router.push('../../../hellow');
			},
			dangqian(){
				this.$router.go(0);
			}
		}
	}
</script>

<style scoped>
	.nav-full{
		width: 100%;
		height: 50px;
		background-color: rgb(249, 249, 249);
		color: #5A5A5A;
		font-size: 14px;
	}
	.nav-title{
		width: 50%;
		height: 100%;
		text-align: center;
		line-height: 50px;
	}
	.nav-title-span{
		cursor: pointer;
		border-bottom: 1px solid #FFFFFF;
	}
	.nav-list{
		width: 50%;
		height: 100%;
	}
	.nav-list li{
		width: 160px;
		height: 100%;
		text-align: center;
		line-height: 50px;
		float: left;
	}
	.isli{
		background: #6bb90f;
		color: #FFFFFF;
	}
	.nav-list li:hover{
		cursor: pointer;
		background: #6bb90f;
		color: #FFFFFF;
	}
	.nav-title-span:hover{
		border-bottom: 1px solid #5a5a5a;
	}
</style>