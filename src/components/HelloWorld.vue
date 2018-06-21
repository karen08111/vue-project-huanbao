<template>
	<div class="main">
			<headers></headers>
			<VaCar></VaCar>
			<div class="content-main">
				<titles :titleName="weDo.title" :subtitle="weDo.EnTitle"
					:intr="weDo.intr" >
				</titles>
				<div class="two-list">
					<!--<listMoudel style="margin-left: 0;"></listMoudel>-->
					<listMoudel v-for="(i,key,index) in listMoudel" :src="i.img" :title="i.names" :intr="i.intr" :key="i.lid"></listMoudel>
				</div>
				<!---->
				<advantage></advantage>
				<div class="ti-posi">
					<titles :titleName="cases.title" :subtitle="cases.EnTitle"
						:intr="cases.intr" >
					</titles>
				</div>
				<div class="project">
					<project v-for="(p,key,index) in caseList" :key="p.lid" :title="p.title" :src="p.img" :lid="p.lid"></project>
				</div>
				<btns class="more-projects"><router-link to="../projectCase">更多案例</router-link></btns>
				<div class="world">
					<h1 class="world-h1">{{world.title}}</h1>
					<p class="world-p1">{{world.EnTitle}}</p>
					<p class="world-p3">{{world.subTitle}}</p>
					<p class="world-p3">{{world.intr}}</p>
					<div class="butns">
						<btns class=""><router-link to="../recruitment">加入我们</router-link></btns>
						<btns class=""><router-link to="../leave">在线留言</router-link></btns>
					</div>
				</div>
				
				<div class="ti-posi">
					<titles :titleName="news.title" :subtitle="news.EnTilte"
						:intr="news.intr" >
					</titles>
				</div>
				<!--新闻版块-->
				<div class="news-moudel">
					<!--<news :list="list"></news>-->
					<div class="l-l-news">
						<lis :ns="list" :indexs="0"></lis>
					</div>
					<div class="news-img fl">
						<img :src="imgUrl"/>
					</div>
				</div>
			</div>
			<!--尾部-->
			<footers></footers>
			<!--<banner></banner>-->
	</div>
  
</template>

<script>
//	import {requireArticle} from '@/axios/api'
export default {
  data () {
    return {
    	weDo:'',//我们能做什么
    	listMoudel:[],//模块
    	cases:'',//工程案例
    	caseList:[],//工程案例列表
    	world:'',//
    	news:'',//新闻资讯
    	list:[],//新闻列表
    	imgUrl:'',//新闻列表右边图
    	
    }
    
  },
  mounted(){
	this.$http.get("static/data.json")
	.then((data)=>{
		let lists=data.data.xinwen;//新闻三条
		this.list=lists[0].slice(0,3);
		this.weDo=data.data.titleList.weDo;
		this.listMoudel=data.data.listMounted;
		this.cases=data.data.titleList.case;
//		console.log(data.data.newsList);
		this.news=data.data.titleList.news;
		this.caseList=data.data.project;
		this.world=data.data.world;
		this.list=data.data.newsList;
		this.imgUrl=data.data.newsImg;
	})
  },
  methods:{
  	liuyan(){
//		this.$router.push('../leave');
  	},
  	jiatu(){
//		this.$router.push('../recruitment');
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*尾部*/
	.btns a{
		color: #FFFFFF;
	}
	.more-projects a{
		color:inherit;
	}
	.more-projects a:hover{
		color: #FFFFFF;
	}
	.l-l-news{
		width: 50%;
		height: 100%;
		float: left;
	}
	#mmar{
		margin-left: 0;
	}
	.news-moudel{
		width: 100%;
		height: 330px;
		margin-bottom: 60px;
	}
	.news-img{
		width: 45%;
		height: 100%;
	}
	.news-img img{
		width: 500px;
		height: 330px;
		margin-left: 40px;
	}
	
	
	
	.world{
		width: 100%;
		height: 360px;
		background: url(../../static/img/1920.jpg) no-repeat center center;
		background-size: 100%;
		margin-top: 30px;
		text-align: center;
		color: #FFFFFF;
		padding-top: 70px;
		box-sizing: border-box;
		line-height: 25px;
	}
	.butns{
		margin-top: 20px;
		margin:50px auto;
		display: flex;
		width: 33%;
		color:#FFFFFF;
	}
	.world-h1{
		font-size: 36px;
	}
	.world-p1{
		font-size: 14px;
		margin-bottom: 20px;
		margin-top: 10px;
	}
	.world-p3{
		font-size: 14px;
	}
	/*工程案例*/
	.project{
		width: 100%;
		height: 500px;
		/*background: #333333;*/
	}
	.ti-posi{
		position: relative;
		/*padding-left: 500px;*/
		box-sizing: border-box;
		/*margin: auto;*/
		margin-bottom: 40px;
	}
	
	.content-main{
		width: 1200px;
		margin: auto;
		position: relative;
	}
	.two-list{
		width: 100%;
		height: 320px;
		margin-top: 50px;
		display: flex;
	}
	
	/*我们的优势*/
	/*.about{
		width: 100%;
		height: 440px;
		background: url(../../static/img/bg.jpg) no-repeat center center;
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
	}*/
</style>
