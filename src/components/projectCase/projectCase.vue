<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="工程案例" name1="固废处理" name2="污水处理" name3="再生资源"
			one="../projectCase/dispose" two="../projectCase/sewage" three="../projectCase/rebirth"></usTitle>
		<router-view>
			
		</router-view>
		<footers></footers>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.case-moudel{
		width: 1200px;
		height: 560px;
		margin: 50px auto;
	}
</style>