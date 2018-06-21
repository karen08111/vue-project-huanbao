<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="在线留言" name1="固废处理" name2="污水处理" name3="再生资源"
			one="../projectCase/dispose" two="../projectCase/sewage" three="../projectCase/rebirth"></usTitle>
		<div class="leave">
			<titles titleName="在线留言" subtitle="MESSAGE"
				intr="环境保护是利用环境科学的理论和方法，协调人类与环境的关系，解决各种问题，保护和改善环境的一切人类活动的总称​" >
			</titles>
			<p class="leave-title">请仔细填写好下方预约留言，我们的客服人员会在24小时内与您联系，谢谢您的支持与关注！​</p>
			<form action="" class="leave-from">
				<p class="form-title">咨询项目</p>
				<p>
					<input type="checkbox" /><label for="">污水处理</label>
					<input type="checkbox" /><label for="">固废处理</label>
					<input type="checkbox" /><label for="">资源处理</label>
				</p>
				<div class="form-moudel">
					<p><label for="">姓名</label></p>
					<p><input type="text"/></p>
				</div>
				<div class="form-moudel">
					<p><label for="">姓名</label></p>
					<p><input type="text"/></p>
				</div>
				<div class="form-moudel">
					<p><label for="">姓名</label></p>
					<p><input type="text"/></p>
				</div>
				<div class="form-moudel">
					<p><label for="">姓名</label></p>
					<p><textarea rows="5" cols="96"></textarea></p>
				</div>
				<input type="submit" id="sub"/>
			</form>
			<p class="boda">拨打我们的全国咨询热线，同样可以预约咨询：</p>
			<p class="boda-tel">400-XXX-XXXX</p>
			<p class="boda-ti">（在线时间：周一至周日9:00—18:00）</p>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	
	.leave{
		width: 1200px;
		margin: auto;
	}
	.leave-title{
		margin-top: 50px;
		font-size: 18px;
		text-align: center;
		margin-bottom: 50px;
	}
	.leave-from{
		width: 960px;
		height: 620px;
		margin: auto;
		border: 6px solid rgb(217, 217, 217);
		margin-bottom: 50px;
		padding-left: 120px;
		box-sizing: border-box;
		padding-top: 35px;
		color: #5A5A5A;
		font-size: 14px;
	}
	.form-title{
		/*font-size: 14px;*/
		margin-bottom: 20px;
	}
	.form-moudel{
		margin-top: 30px;
	}
	.form-moudel input{
		margin-top: 10px;
		width: 700px;
		height: 40px;
		background: #EEEEEE;
		padding-left: 5px;
		box-sizing: border-box;
	}
	textarea{
		background: #EEEEEE;
		padding-left: 5px;
		margin-top: 10px;
		box-sizing: border-box;
	}
	#sub{
		width: 700px;
		height: 40px;
		background: #434343;
		color: #FFFFFF;
		margin-top: 20px;
	}
	#sub:hover{
		background: black;
	}
	
	.boda{
		text-align: center;
		font-size: 14px;
		color: #5A5A5A;
	}
	.boda-tel{
		text-align: center;
		font-size: 24px;
		color: #5A5A5A;
		font-weight: bold;
		margin-top: 20px;
	}
	.boda-ti{
		text-align: center;
		font-size: 14px;
		color: rgb(107, 185, 15);
		margin-bottom: 50px;
		margin-top: 20px;
	}
</style>