<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="关于我们" one="../projectCase/dispose" two="../projectCase/sewage" three="../projectCase/rebirth"
			name1="固废处理" name2="污水处理" name3="再生资源"></usTitle>
			<!--<usTitle :list="list1"></usTitle>-->
		<div class="content-main">
			<titles :titleName="aboutUs.title" :subtitle="aboutUs.EnTitle"
				:intr="aboutUs.intr" >
			</titles>
			<div class="us">
				<div class="us-img fl">
					<img :src="aboutUs.imgUrl"/>
				</div>
				<div class="us-content fl">
					<span class="us-span" v-for="(c,key,index) in aboutUs.contentList" :key="index">
						{{c}}
					</span>
				</div>
			</div>
		</div>
		<!--优势-->
		<div class="youshi">
			<div class="youshi-content">
				<div class="about-one">
					<titles :titleName="adOf.title" :subtitle="adOf.EnTitle" style="text-align: left;"
						:listContent1="adOf.intr1" 
						:listContent2="adOf.intr2" ></titles>
					<!--<div class="about-ioc">
						<img src="../../static/img/nt9j.png"/>
						<p class="ioc-t-name">国家科技奖</p>
						<p class="ioc-t-sub">12360项目</p>
					</div>-->
					<iocs v-for="(io,key,index) in adList" :key="io.lid" :src="io.img" :title="io.title" :subTitle="io.subTitle"></iocs>
				</div>
				<div class="youshi-img fl">
					<img src="../../../static/img/14.jpg"/>
				</div>
			</div>
		</div>
		<!--我们能做什么-->
		<div class="dos">
			<titles :titleName="weDo.title" :subtitle="weDo.EnTitle"
				:intr="weDo.intr" >
			</titles>
			<div class="two-list">
				<listMoudel v-for="(list,key,index) in listMoudel" :key="list.lid" :src="list.img" :title="list.names" :intr="list.intr" ></listMoudel>
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list1:[],//列表1
				list2:[],//列表2
				aboutUs:'',//关于我们标题
				adOf:'',//我们的优势
				adList:[],//我们的优势下列表
				weDo:'',//我们能做什么
				listMoudel:[],//模块
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.headImg=data.data.headImg;
				this.list1=data.data.useTitle.list;
				this.list2=data.data.useTitle.list1;
				this.aboutUs=data.data.titleList.aboutUs
				this.adOf=data.data.titleList.adOf;
				this.adList=this.adOf.aboutIoc;
				this.weDo=data.data.titleList.weDo;
				this.listMoudel=data.data.listMounted;
//				console.log(this.listMoudel);
			})
		}
	}
</script>

<style scoped>
	/*能做什么*/
	.dos{
		width: 1200px;
		height: 570px;
		margin: auto;
	}
	.two-list{
		width: 100%;
		height: 320px;
		margin-top: 50px;
		display: flex;
	}
	
	
	.content-main{
		width: 1200px;
		margin: auto;
		position: relative;
	}
	.us{
		width: 100%;
		height: 345px;
		margin-top: 50px;
	}
	.us-img{
		width: 45%;
		height: 100%;
	}
	.us-img img{
		width: 460px;
		height: 345px;
	}
	.us-content{
		width: 55%;
		height: 100%;
		overflow-y: scroll;
		transition: all .5s linear;
	}
	.us-span{
		display: block;
		width: 100%;
		/*height: 140px;*/
		text-indent: 25px;
		box-sizing: border-box;
		line-height: 27px;
		padding: 10px;
		font-size: 14px;
		color: #5A5A5A;
		padding-top: 0;
		padding-right: 20px;
	}
::-webkit-scrollbar{width:8px;background-color:#D2D2D2;border-radius: 10px;}
::-webkit-scrollbar-thumb{background-color:#595959;border-radius:8px;border:2px solid #e1e5ea;}
::-webkit-scrollbar-thumb:hover{background-color:black;cursor: pointer;}
::-webkit-scrollbar-thumb:active{border:0;background-color:black}
::-webkit-scrollbar-thumb:window-inactive{background-color:#4c97da}
	
	
	/*优势*/
	.youshi{
		width: 100%;
		height: 440px;
		background: rgb(246, 246, 246);
	}
	.youshi-content{
		width: 1200px;
		height: 100%;
		margin: auto;
	}
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
	.youshi-img{
		width: 50%;
		height: 100%;
	}
	.youshi-img img{
		width: 548px;
		height: 333px;
		margin-top: 50px;
	}
</style>