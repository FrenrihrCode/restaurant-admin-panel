<script lang="ts" setup>
	defineProps<{
		title: string;
		subtitle?: string;
		center?: boolean;
	}>();
</script>

<template>
	<div class="title" :class="{ 'text-center': center }">
		<h2>{{ title }}</h2>
		<h4 v-if="subtitle">{{ subtitle }}</h4>
	</div>
</template>

<style lang="scss" scoped>
	.title {
		h2 {
			font-family: 'Playfair Display', serif;
			@apply text-title;
			@apply text-text-title;
		}
		h4 {
			@apply mt-4;
			@apply text-body;
			@apply text-text-body;
		}
	}
</style>
