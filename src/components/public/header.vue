<template>
		<div class="header">
			<div class="header-m">
				<div class="nav">
					<ul class="nav-ul fl">
						<li v-for="i in navList"><router-link :to="i.to">{{i.name}}</router-link></li>
						<!--<li><router-link to="../about">关于我们</router-link></li>
						<li><router-link to="../projectCase">工程案例</router-link></li>
						<li><router-link to="../newslist">新闻资讯</router-link></li>
						<li><router-link to="../recruitment">人才招聘</router-link></a></li>
						<li><router-link to="../contact">联系我们</router-link></li>
						<li><router-link to="../leave">在线留言</router-link></li>-->
					</ul>
					<div class="nav-sou fl">
						<div class="absolute">
							<input type="text" class="nav-btn1 fl" placeholder="请输入关键字搜索" v-model="sou"
								 @blur="shiqu()"/>
							<input type="button" class="nav-btn2 fl" value="" @click="search()" />
						</div>
						<ul class="sou-ul">
							<li v-for="(ss,key,index) in souList" :key="index" @click="souJump(ss.index,ss.lid)">{{ss.title}}</li>
						</ul>
					</div>
				</div>
				<div class="header-t fl">
					<img src="../../assets/img/qwol.png"/>
					<div class="header-name fl">
						<p><a>{{titles.namess}}</a></p>
						<p class="header-subtitle">{{titles.eName}}</p>
					</div>
				</div>
				<div class="email fl">
					<img src="../../assets/img/qur3.png"/>
					<div class="email-title fl">
						<h5>{{email.namess}}</h5>
						<h6>{{email.subName}}</h6>
					</div>
				</div>
				<div class="email fl">
					<img src="../../assets/img/kalr.png"/>
					<div class="email-title fl">
						<h5 class="quanguo">{{tel.namess}}</h5>
						<h6 class="quan-tel">{{tel.tel}}</h6>
					</div>
				</div>
				<div class="ico fl">
					<div class="ico-q fl"></div>
					<div class="ico-wx fl"></div>
					<div class="ico-wb fl"></div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				header:'',
				titles:'',
				email:'',
				tel:'',
				navList:[],//导航列表
				sou:'',//搜索值
				souList:[]//搜索出来的列表
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.header=data.data.header;
				this.titles=data.data.header.title;
				this.email=data.data.header.email;
				this.tel=data.data.header.Tel;
				this.navList=this.header.navList;
			})
		},
		methods:{
			shiqu(){
//				this.sou=''
			},
			https(){
			},
			souJump(index,lid){
//				console.log(index,lid);
				this.$router.push('../../details/'+index+'/'+lid);
				this.$router.go(0);
			},
			search(){
				alert('自动检索！');
			}
		},
		watch:{
			sou(curVal,oldVal){
				this.$http.get("static/data.json")
				.then(data=>{
					let list=data.data.xinwen;
					let wai=[];
					let nei=[];
					for(let i = 0;i<list.length;i++){
						for(let j = 0;j<list[i].length;j++){
							let obj={
								lid:null,
								index:null,
								title:''
							};
							obj.lid=i;
							obj.index=list[i][j].lid;
							obj.title=list[i][j].title;
							nei.push(obj);
//							console.log(curVal.indexOf(str));
						}
					}
					if(this.sou){
						for(let t=0;t<nei.length;t++){
							if(nei[t].title.indexOf(curVal)>-1){
									let newobj={
										index:null,
										lid:null,
										title:''
									};
									newobj.lid=nei[t].index;//商品所在列表
									newobj.index=nei[t].lid;//商品所在下标
									newobj.title=nei[t].title;//这是标题
									this.souList.push(newobj);//
								}
							}
//						console.log(this.souList);
					}else{
						this.souList=[];
					}
					
				})
			}
		},
	}
</script>

<style>
	.sou-ul{
		width: 105.5%;
		position: relative;
		top: 50px;
		left: -5px;
		top: 46px;
		background: #FFFFFF;
	}
	.sou-ul li{
		width: 100%;
		padding-left: 10px;
		box-sizing: border-box;
		height: 30px;
		line-height:30px;
		font-size: 14px;
		color: #434343;
		cursor: pointer;
	}
	.sou-ul li:hover{
		background: #1C1C1C;
		color: #FFFFFF;
	}
</style>