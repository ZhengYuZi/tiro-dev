<template>
	<ti-card class="card-box">
		<template #header>
			<div>Select 选择器</div>
		</template>
		<p>单选</p>
		<ti-select width="100%" placeholder="请选择" :options="options" @select="handleSelect"></ti-select>
		<p>多选</p>
		<ti-select width="100%" placeholder="请选择" multiple :options="options" @select="handleSelect"></ti-select>
		<p>禁用</p>
		<ti-select width="100%" disabled placeholder="请选择" :options="options" @select="handleSelect"></ti-select>
	</ti-card>
	<ti-card class="card-box">
		<template #header>
			<div>Input 输入框</div>
		</template>
		<p>默认</p>
		<ti-input width="100%" clearable type="text"></ti-input>
		<p>密码框</p>
		<ti-input width="100%" multiple clearable type="password"></ti-input>
		<p>禁用</p>
		<ti-input disabled width="100%" clearable type="text"></ti-input>
	</ti-card>
	<ti-card class="card-box">
		<template #header>
			<div>Button 按钮</div>
		</template>
		<ti-button disabled type="light">点击</ti-button>
		<ti-button type="light">点击</ti-button>
		<ti-button disabled type="fill">点击</ti-button>
		<ti-button type="fill">点击</ti-button>
		<ti-button disabled>点击</ti-button>
		<ti-button>点击</ti-button>
	</ti-card>
	<ti-card class="card-box">
		<template #header>
			<div>Image 图片</div>
		</template>
		<p><b>fit:</b> fill / contain / cover / none / scale-down</p>
		<ti-image url="../assets/pig.webp" alt="Little pig" fit="contain" @error="errorImg" @load="loadImg">
			<template #placeholder>
				<div>Image 图片</div>
			</template>
		</ti-image>
	</ti-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref([
	{
		value: 'mihoutao',
		label: '猕猴桃'
	}, {
		value: 'xiangjiao',
		label: '香蕉'
	}, {
		value: 'juzi',
		label: '橘子'
	}, {
		value: 'liulian',
		label: '榴莲'
	}
])

const handleSelect = (value: string) => {
	console.log(value)
}

const inputValue = ref('')

const handleInput = (value: string) => {
	console.log(value)
}

const handleChange = (value: string) => {
	console.log(inputValue.value)
}

const clear = (value: string) => {
	console.log(value)
}

const errorImg = ()=>{
	console.log('error')
}

const loadImg = ()=>{
	console.log('load')
}

</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	display: flex;
}

.card-box {
	width: 23.75%;
	margin-top: 10px;
	margin-right: 1%;
}
.ti-button{
	box-sizing: border-box;
	margin-left: 10px;
	margin-top: 10px;
}
.ti-image{
	width: 200px;
	height: 200px;
}
</style>
