<script lang="ts" setup>
	const onSubmit = () => {};
</script>

<template>
	<form class="auth-login" @submit.prevent="onSubmit">
		<sp-title
			title="Registrarse"
			subtitle="Create tu cuenta y comienza a explorar."
			center
		/>
		<div class="auth-login__group">
			<sp-input label="Email" class="auth-login__input col-span-2" />
			<sp-input label="Nombre de usuario" class="auth-login__input" />
			<sp-input label="Nombre de usuario" class="auth-login__input" />
			<sp-input
				label="Contraseña"
				type="password"
				class="auth-login__input"
			/>
			<sp-input
				label="Confirmar contraseña"
				type="password"
				class="auth-login__input"
			/>
		</div>
		<sp-button text="Registrarse" type="submit" class="auth-login__btn" />
		<p class="auth-login__cta">
			¿Ya posees una cuenta?
			<router-link to="/login"> Inicia sesión </router-link>
		</p>
	</form>
</template>

<style lang="scss" scoped>
	.auth-login {
		@apply flex flex-col justify-center items-center;

		&__redirect,
		&__cta {
			@apply mt-4;
		}
		&__group {
			@apply mt-4;
			@apply grid grid-cols-2;
			@apply gap-4;
			@apply w-full;
		}
		&__btn {
			@apply mt-6;
		}
	}
</style>
