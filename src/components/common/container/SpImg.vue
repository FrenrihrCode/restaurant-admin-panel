<template>
	<div class="img">
		<img :src="src" :alt="alt || attribution" />
		<a v-if="hrefAttr" :href="hrefAttr" target="_blank" class="img__attr">
			<small>{{ attribution }}</small>
		</a>
		<small v-else class="img__attr">{{ attribution }}</small>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		src: string;
		alt?: string;
		hrefAttr?: string;
		attribution?: string;
	}>();
</script>

<style lang="scss" scoped>
	.img {
        @apply w-full;
		@apply relative;

		&__attr {
			@apply absolute;
			@apply bottom-0 right-0;
		}
	}
</style>
