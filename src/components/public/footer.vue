<template>
	<footer class="footer">
		<div class="footer-main">
			<ul class="footer-ul">
				<li v-for="i in footerNav" class="footer-li"><router-link :to="i.to">{{i.name}}</router-link></li>
			</ul>
			<p class="footer-about"><span>联系我们</span>&nbsp;/&nbsp;<span>Contact us</span></p>
			<div class="xian"></div>
			<div class="footer-content">
				<p><span>地址：</span><span>{{footers.location}}</span></p>
				<p><span>E-mail：</span><span>{{footers.Email}}</span></p>
				<p>
					<span> 手机：</span><span>{{footers.mobile}}</span>
					<span> TEL：</span><span>{{footers.tel}}</span>
					<span> 座机：</span><span>{{footers.zuoji}}</span>
				</p>
			</div>
			<div class="footer-ioc">
				<div class="footer-ioc1"></div>
				<div class="footer-ioc2"></div>
				<div class="footer-ioc3"></div>
				<div class="footer-ioc4"></div>
			</div>
		</div>
		<div class="footer-bottom">
			<p>Copyright © 2009 - 2017 Cld , All Rights Reserved 某某环保有限公司  ​    版权所有 沪ICP备124XXX45XXX号 </p>
		</div>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
				footerNav:[],//底部列表
    			footers:''//底部
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.footerNav=data.data.footer.navList;
				this.footers=data.data.footer;
//				console.log(data.data.footer.navList);
			})
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 320px;
	    background-color: rgb(23, 23, 23)
	}
	.footer-main{
		width: 1200px;
		height: 100%;
		margin: auto;
		padding-top: 35px;
		box-sizing: border-box;
	}
	.footer-ul{
		width: 100%;
		height: 20px;
	}
	.footer-li{
		color: #999999;
		text-align: center;
		width: 14.2%;
		height: 100%;
		line-height: 20px;
		border-right: 1px solid #434343;
		cursor: pointer;
		font-size:12px;
		float: left;
	}
	.footer-li:hover{
		color: #FFFFFF;
	}
	.footer-about{
		text-align: center;
		margin-top: 35px;
		font-size: 24px;
		color: rgb(129, 129, 129);
	}
	.footer-about :first-child{
		font-size: 24px;
		color: rgb(204, 204, 204);
	}
	.footer-about :last-child{
		font-size: 14px;
	}
	.xian{
	    word-wrap: break-word;
		padding: 0px;
		border-color: rgb(107, 185, 15) transparent transparent;
		border-width: 1px 0px 0px;
		height: 9px;
		width: 50px;
		display: block;
		border-style: solid;
		margin:20px auto;
	}
	.footer-content{
		margin: auto;
		text-align: center;
		line-height: 25px;
	}
	.footer-content span{
		color: rgb(153, 153, 153);
		font-size: 12px;
	}
	.footer-ioc{
		width: 600px;
		height: 36px;
		margin:20px auto;
	}
	.footer-ioc div{
		width: 100px;
		height: 36px;
		float: left;
		background-size: 200%;
		background-position: right center; 
		margin-left: 40px;
		transition: all .5s linear;
	}
	.footer-ioc1{
		background: url(../../../static/img/h1.png);
	}
	.footer-ioc2{
		background: url(../../../static/img/c1.png);
	}
	.footer-ioc3{
		background: url(../../../static/img/s1.png);
	}
	.footer-ioc4{
		background: url(../../../static/img/g1.png);
	}
	.footer-ioc1:hover{
		background-position: left center; 
	}
	.footer-ioc2:hover{
		background-position: left center; 
	}
	.footer-ioc3:hover{
		background-position: left center; 
	}
	.footer-ioc4:hover{
		background-position: left center; 
	}
	.footer-bottom{
		width: 100%;
		height: 50px;
		background: black;
		text-align: center;
		line-height: 50px;
	}
	.footer-bottom p{
		color: rgb(136, 136, 136);
		font-size: 12px;
	}
</style>