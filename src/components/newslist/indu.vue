<template>
	<div class="mains">
		<titles titleName="行业动态" subtitle="news"
			intr="我们拥有二十余年环境领域实践经验，在中国环境市场具有独特地位。" >
		</titles>
		<div class="news-content">
			<lis :ns="nlist[num]" :indexs="num"></lis>
			<pages :pages="pageList" @tar="tar"></pages>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				nlist:[],
				pageList:[],//传过去的页码
				num:0
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.nlist=data.data.xinwen;
				
				for(var i = 0 ; i<this.nlist.length;i++){
					this.pageList.push(i);
				}
			})
		},
		methods:{
			tar(data){
				this.num=data;
			}
		}
	}
</script>

<style scoped>
	.mains{
		width: 1200px;
		margin: auto;
	}
	.news-content{
		width: 100%;
		height: 548px;
	}
</style>