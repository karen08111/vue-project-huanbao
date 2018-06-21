<template>
	<div class="main">
		<!--<headers></headers>
		<headImg></headImg>-->
		<div class="list-list">
			<titles titleName="污水处理" subtitle="PROJECT CASE"
				intr="环境保护是利用环境科学的理论和方法，协调人类与环境的关系，解决各种问题，保护和改善环境的一切人类活动的总称" >
			</titles>
			<div class="case-moudel">
				<project v-for="(pr,key,index) in pro[num]" :key="pr.lid" :src="pr.img" :title="pr.title" :pp="num" :index="num" :lid="pr.lid"></project>
			</div>
			<pages :pages="pageList" @tar="tar"></pages>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pro:[],
				pageList:[],//传过去页码
				num:0,//接收过来的当前页码
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.pro=data.data.projectList;
				for(var i = 0 ; i<this.pro.length;i++){
					this.pageList.push(i);
				}
			})
		},
		methods:{
			tar(data){
				this.num=data;//接收过来的页码
			}
		}
	}
</script>

<style scoped>
	.case-moudel{
		width: 1200px;
		height: 478px;
		margin: 50px auto;
	}
</style>