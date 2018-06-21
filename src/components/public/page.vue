<template>
	<div class="pages">
		<p>
			<button @click="up()" :disabled="page == 0" :class="{'nn':page <=0}">&lt;</button>
			<button v-for="(p,index) in pages" :class="{'rule-btn':page==p}" @click="dianji(p)" >{{p+1}}</button>
			<button @click="next()" :disabled="page+1 == pages.length" :class="{'nn':page >= pages.length-1}">&gt;</button>
		</p>
	</div>
</template>

<script>
	export default{
		props:{
			pages:{
				type:Array
			},
			currentPage: {
				type: Number,
				default: 0
			}
		},
		data(){
			return{
				page:0
			}
		},
		mounted(){
			this.$emit('tar',this.page);
		},
		methods:{
			dianji(p){
				this.page=p;
				this.$emit('tar',p);
			},
			up(){
				this.page--;
				this.$emit('tar',this.page);
			},
			next(){
				this.page++;
				this.$emit('tar',this.page);
			}
		}
	}
</script>

<style scoped>
	.nn{
		background: #FFFFFF !important;
		color: gainsboro!important;
		border: 1px solid gainsboro!important;
	}
	.nn:hover{
		background: #FFFFFF!important;
	}
	.pages{
		width: 100%;
		text-align: center;
	}
	.pages p button{
		margin-left: 5px;
		width: 20px;
		height: 20px;
		border: 1px solid black;
		background: #FFFFFF;
		margin-bottom: 50px;
	}
	.rule-btn{
		background: black!important;
		color: #FFFFFF;
	}
	button:hover{
		background: black!important;
		color: #FFFFFF;
	}
</style>