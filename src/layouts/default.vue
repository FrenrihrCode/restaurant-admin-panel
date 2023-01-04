<script setup lang="ts"></script>

<template>
	<sp-header class="layout__header" />
	<main class="layout__body">
		<router-view />
	</main>
</template>

<style lang="scss" scoped>
	.layout {
		&__header {
			@apply fixed top-0;
		}
		&__body {
			@apply min-h-screen;
			@apply flex;
			background: rgba(255, 239, 216, 0.34);
		}
	}
</style>
