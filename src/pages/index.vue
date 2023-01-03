<script lang="ts" setup>
	import restaurantImg from '@/assets/pictures/restaurant.svg';

	useHead({
		title: 'SirVePe | Iniciar Sesión',
	});
</script>

<template>
	<div class="login">
		<div class="login__form">
			<sp-title title="SirVePe" class="mb-6" />
			<auth-login />
		</div>
		<div class="login__pictures">
			<sp-img
				:src="restaurantImg"
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
		@apply gap-[82px];
		@apply px-[150px];

		&__form {
			@apply w-full max-w-[420px];
		}
		&__pictures {
			@apply w-full max-w-[720px];
		}
	}
</style>

<route lang="json">
{
	"name": "home"
}
</route>
