<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="联系我们" name1="固废处理" name2="污水处理" name3="再生资源"
			one="../projectCase/dispose" two="../projectCase/sewage" three="../projectCase/rebirth"></usTitle>
			<div class="contact">
				<titles titleName="联系我们" subtitle="CONTACT US"
					intr="环境保护是利用环境科学的理论和方法，协调人类与环境的关系，解决各种问题，保护和改善环境的一切人类活动的总称​" >
				</titles>
				<div class="contact-p">
					<p class="contact-title">{{obj.bejing}}</p>
					<p class="contact-subtitle"><span>公司地址：</span><span>{{obj.location}}</span></p>
					<p><span>邮箱：</span><span>{{obj.Email}}</span></p>
					<p>
						<span>电话：</span><span>{{obj.tel}}</span>&nbsp;&nbsp;&nbsp;
						<span>手机：</span><span>{{obj.mobile}}</span>
					</p>
					<p><span>热线：</span><span>{{obj.zuoji}}</span></p>
					<p class="maps">查看地图地址</p>
					<div class="map">
						
					</div>
				</div>
				
			</div>
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				obj:''
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.obj=data.data.footer;
				console.log(data.data.footer);
			})
		}
	}
</script>

<style scoped>
	.contact{
		width: 1200px;
		margin: auto;
	}
	.contact-p{
		text-align: center;
		width: 100%;
		color: rgb(102, 102, 102);
		font-size: 13px;
		margin-top: 30px;
		line-height: 30px;
	}
	.contact-title{
		font-size: 28px;
		color: black;
		font-weight: bold;
	}
	.contact-subtitle{
		margin-top: 30px;
	}
	.maps{
		width: 100px;
		height: 20px;
		margin: auto;
		text-align: center;
		color: #FFFFFF;
		background: black;
		line-height: 20px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.map{
		width: 100%;
		height: 320px;
	}
</style>