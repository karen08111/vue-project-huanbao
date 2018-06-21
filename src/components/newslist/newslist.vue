<template>
	<div class="main">
		<headers></headers>
		<headImg></headImg>
		<usTitle names="新闻资讯" name1="环境时报" name2="行业动态" name3="废物处理"
			one="../newslist/envi" two="../newslist/indu" three="../newslist/rub"></usTitle>
			<router-view></router-view>
		<footers></footers>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				liebiao:[]
			}
		},
		mounted(){
			this.$http.get("static/data.json")
			.then(data=>{
				this.liebiao=data.data.xinwen;
			})
		}
	}
</script>

<style scoped>
	
</style>