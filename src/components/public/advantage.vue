<template>
	<div class="about">
		<div class="about-one">
			<titles :titleName="ab.title" :subtitle="ab.EnTitle" style="text-align: left;"
				:listContent1="ab.intr1" 
				:listContent2="ab.intr2" ></titles>
			<iocs v-for="(i,ket,index) in abList" :key="i.lid" :src="i.img" :title="i.title" :subTitle="i.subTitle"></iocs>
		</div>
		<div class="about-two">
			<div class="mes">
				<titles :titleName="us.title" :subtitle="us.EnTitle" style="text-align: left;"
				:listContent1="us.intr" 
				 ></titles>
			</div>
			<div class="mes-img">
				<img :src="us.img"/>
				<span class="mes-more" @click="more()">更多</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			
		},
		data(){
			return{
				ab:'',//标题
				abList:'',//国家科技奖列表
				us:'',//关于我们
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.ab=data.data.titleList.adOf;
				this.abList=this.ab.aboutIoc;
				this.us=data.data.titleList.indexAbout;
			})
		},
		methods:{
			more(){
				this.$router.push('../about');
			}
		}
	}
</script>

<style scoped>
	.about{
		width: 100%;
		height: 440px;
		background: url(../../../static/img/bg.jpg) no-repeat center center;
		background-size: 100%;
	}
	.about-one{
		width: 50%;
		height: 100%;
		padding-top: 50px;
		box-sizing: border-box;
		float: left;
		color: #5a5a5a;
	}
	.about-two{
		width: 50%;
		height: 100%;
		position: relative;
		float: left;
	}
	.mes{
		width: 470px;
		height: 160px;
		position: absolute;
		top: 50px;
		left: 50px;
		color: #FFFFFF !important;
	}
	.mes-img{
		width: 470px;
		height: 100px;
		position: absolute;
		bottom: 90px;
		left: 50px;
	}
	.mes-img img{
		width: 210px;
		height: 100px;
		float: left;
	}
	.mes-more{
		display: block;
		width: 58px;
		height: 98px;
		margin-left: 30px;
		float: left;
		color: #FFFFFF;
		cursor: pointer;
		text-align: center;
		font-size: 12px;
		line-height: 100px;
		border: 1px solid rgba(85,85,85,1);
	}
	.mes-more:hover{
		background: #87C844;
		border: 0px solid rgba(85,85,85,1);
	}
</style>