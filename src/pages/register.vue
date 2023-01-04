<script lang="ts" setup>
	import sushiStoreImg from '@/assets/pictures/tienda-sushi.svg';

	useHead({
		title: 'SirVePe | Registrarse',
	});
</script>

<template>
	<div class="login">
		<div class="login__form">
			<sp-title title="SirVePe" class="mb-6" />
			<auth-register />
		</div>
		<div class="login__pictures">
			<sp-img
				:src="sushiStoreImg"
				alt="Mi restaurant"
				attribution="Ilustration by Storyset"
				href-attr="https://storyset.com"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.login {
		@apply w-full;
		@apply flex justify-center items-center;
		@apply gap-16;
		@apply px-20;

		&__form {
			@apply w-full max-w-[520px];
		}
		&__pictures {
			@apply w-full max-w-[680px];
		}
	}
</style>
