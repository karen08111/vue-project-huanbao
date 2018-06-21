<template>
	<div class="btns">
		<slot></slot>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	.btns{
		width: 158px;
		height:40px;
		border: 1px solid gainsboro;
		margin: auto;
		text-align: center;
		line-height: 40px;
	    color: inherit;
	    cursor: pointer;
	    font-size: 12px;
	}
	.btns:hover{
		background: rgb(107, 185, 15);
		color: #FFFFFF;
	}
</style>