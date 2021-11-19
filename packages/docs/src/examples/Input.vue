<template>
    <ti-input v-model="value" clearable width="200px"></ti-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>