<script setup lang="ts"></script>

<template>
	<sp-header class="layout__header" />
	<sp-side-menu class="layout__menu" />
	<main class="layout__body">
		<router-view />
	</main>
</template>

<style lang="scss" scoped>
	.layout {
		&__header {
			@apply fixed top-0 z-50;
		}
		&__body {
			@apply min-h-screen;
			@apply flex;
			@apply pt-[70px] pl-16;
			background: rgba(255, 239, 216, 0.34);
		}
		&__menu {
			@apply fixed left-0 z-50;
		}
	}
</style>
