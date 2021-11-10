<template>
	<header class="navbar">
		<div class="navbar-wrapper">
			<div class="logo--inner">
				<img src="../../assets/logo.png" alt="tiro_logo" />
			</div>
			<div class="content">
				<div class="navbar-menu">
					<a href="">组件</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar {
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #ddd;
	position: fixed;
	left: 0;
	top: 0;
	.navbar-wrapper{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0px 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.logo--inner{
			width: 110px;
			height: auto;
			img{
				width: 100%;
				height: auto;
			}
		}
		.content{
			.navbar-menu{
				a{
					color: #000;
					&:hover{
						color: #5d82d3;
					}
				}
			}
		}
	}
}
</style>
