<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="新闻详情" name1="固废处理" name2="污水处理" name3="再生资源"
			one="../../projectCase/dispose" two="../../projectCase/sewage" three="../../projectCase/rebirth"></usTitle>
		
		<div class="details">
			<!--<titles titleName="新闻详情" subtitle="MESSAGE"
				intr="环境保护是利用环境科学的理论和方法，协调人类与环境的关系，解决各种问题，保护和改善环境的一切人类活动的总称​" >
			</titles>-->
			<div class="details-content">
				<p class="details-title">{{objs.title}}</p>
				<p class="details-sub">
					来源:<span></span>
					作者:<span>{{objs.author}}</span>
					发布时间:<span>{{objs.times}}-{{objs.mounth}}</span>
					分享到:
				</p>
				
				<div class="poto">
					<img :src="objs.img" alt="" />
					<div class="poto-right">
						<p class="poto-title">{{objs.title}}</p>
					</div>
				</div>
				<!--<p class="details-qidai"></p>-->
				<div class="details-nei" v-for="(pr,key,index) in para" :key="pr.lid">
					{{pr}}
				</div>
				<p class="ups">上一篇: <span class="uuspan" v-if="up" @click="ups()">{{up.title}}</span><span class="uuspan" v-if="!up">无</span></p>
				<p class="nexts">上一篇: <span class="uuspan" v-if="next" @click="nexts()">{{next.title}}</span><span class="uuspan" v-if="!next">无</span></p>
			</div>
		</div>
			
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				index:Number,//数组索引
				id:Number,//lid
				News:[],//新闻总列表
				objs:'',//新闻内容
				para:[],//段落数组
				up:'无',//上一篇文章
				next:'无'//下一篇文章
			}
		},
		created(){
			this.id=this.$route.params.l;
			this.index=this.$route.params.i;
			this.https();
		},
		methods:{
			https(){
				this.$http.get("static/data.json")
				.then(data=>{
					this.News=data.data.casedetail;
					this.objs=this.News[this.index][this.id-1];
					this.para=this.objs.para;
					this.up=this.News[this.index][this.id-2];
					this.next=this.News[this.index][this.id];
//					console.log(this.objs);
				})
			},
			ups(){
				this.id= parseInt(this.id)-1;
				this.https();
			},
			nexts(){
				this.id= parseInt(this.id)+1;
				this.https();
			}
		},
		
	}
</script>

<style scoped>
	.poto{
		width: 100%;
		height: 350px;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.poto img{
		width: 563px;
		height: 342px;
		float: left;
	}
	.poto-title{
		font-size: 20px;
		border-bottom: 1px solid #e2e2e2;
		color: #454545;
		margin-left: 40px;
		font-weight: normal;
	}
	.poto-right{
		width: 50%;
		height: 100%;
		float: left;
	}
	.details{
		width: 1200px;
		margin: auto;
	}
	.details-content{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		line-height: 40px;
		margin-top: 30px;
		margin-bottom: 50px;
	}
	.details-title{
		text-align: center;
		font-size: 20px;
		color: #434343;
		font-weight: bold;
	}
	.details-sub{
		text-align: center;
		font-size: 12px;
		color: #888888;
	}
	.details-sub span{
		margin-right: 30px;
	}
	.details-qidai{
		font-size: 12px;
		color: #888888;
		background: #f5f5f5;
		text-indent: 25px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.details-nei{
		margin-top: 20px;
		font-size: 14px;
		color: #666666;
		text-indent: 25px;
		line-height: 20px;
	}
	.ups{
		margin-top: 50px;
	}
	.ups,.nexts{
		font-size: 12px;
		color: #434343;
		width: 205px;
		height: 30px;
		cursor: pointer;
	}
	.uuspan{
		display: block;
		float: right;
		width: 160px;
		height: 30px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>