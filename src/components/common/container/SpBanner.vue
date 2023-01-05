<script lang="ts" setup>
	const imgBg = computed(
		() =>
			`url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)`
	);
</script>

<template>
	<section class="banner" :style="{ backgroundImage: imgBg }">
		<div class="banner__gradient"></div>
		<div class="relative mx-auto w-full h-full p-16">
			<div class="flex justify-center flex-col w-full h-full">
				<sp-title title="Hola, Carlos Quispe" />
				<div class="mt-8 flex flex-wrap gap-4 text-center">
					<sp-button text="Ver menú del día" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.banner {
		@apply relative;
		@apply rounded-3xl;
		@apply shadow;
		@apply bg-cover bg-center bg-no-repeat;
		@apply overflow-hidden;

		&__gradient {
			@apply absolute inset-0;
			@apply bg-white;
			@apply sm:bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/80 sm:to-transparent;
		}
	}
</style>
