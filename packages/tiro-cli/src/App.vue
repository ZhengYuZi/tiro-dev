<template>
	<!-- <ti-select width="200px" placeholder="请选择" :options="options" @select="handleSelect"></ti-select> -->
	<!-- <ti-input v-model="inputValue" width="200px" clearable type="password"></ti-input> -->
	<!-- <ti-card class="card-box">
		<template #header>
			<div>标题</div>
		</template>
		<div>content 111</div>
		<div>content 222</div>
		<div>content 333</div>
	</ti-card> -->
	<ti-button></ti-button>
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

</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	width: 90vw;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: black; */
}

.card-box {
	width: 350px;
}
</style>
