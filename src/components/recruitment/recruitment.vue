<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="人才招聘" name1="固废处理" name2="污水处理" name3="再生资源"
			one="../projectCase/dispose" two="../projectCase/sewage" three="../projectCase/rebirth"></usTitle>
			<div class="recr">
				<titles titleName="人才招聘" subtitle="RECRUITMENT"
					intr="我们诚心邀请志同道合的朋友一起专注环境保护行业，期待与您的合作！" >
				</titles>
				<div class="recr-img">
					<div class="recr-content">
						<p class="recr-t">{{obj.title}}</p>
						<p v-for="(l,key,index) in intr" :key="index">{{l}}</p>
					</div>
				</div>
				<!--职位-->
				<lader v-for="(la,key,index) in lader" :key="index"
					 :title="la.title" :subtitle="la.subtitle" :pay="la.pay" :tel="la.tel" :resume="la.resume" ></lader>
				<!--<lader></lader>-->
			</div>
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				obj:'',//所有
				intr:[],//副标题
				lader:[]//招聘列表
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.obj=data.data.recr;
				this.intr=this.obj.subtitle;
				this.lader=this.obj.lader;
			})
		}
	}
</script>

<style scoped>
	/*职位*/
	
	
	.recr{
		width: 1200px;
		margin: auto;
	}
	.recr-img{
		margin-top: 50px;
		width: 100%;
		height: 440px;
		background: url(../../../static/img/77.jpg) no-repeat center center;
		background-size: 100%;
		padding-top: 80px;
		box-sizing: border-box;
	}
	.recr-t{
		font-size: 20px;
	}
	.recr-content{
		width: 668px;
		height: 255px;
		box-sizing: border-box;
		padding: 30px;
		padding-top: 40px;
		font-size: 14px;
		line-height: 36px;
		background: #00000014;
		color: #FFFFFF;
	}
	
</style>