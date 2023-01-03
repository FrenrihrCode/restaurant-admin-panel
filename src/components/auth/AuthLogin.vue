<script lang="ts" setup>
	const onSubmit = () => {};
</script>

<template>
	<form class="auth-login" @submit.prevent="onSubmit">
		<sp-title
			title="Iniciar sesión"
			subtitle="Inicia sesión para permanecer conectado."
			center
		/>
		<sp-input label="Email" class="auth-login__input" />
		<sp-input
			label="Contraseña"
			type="password"
			class="auth-login__input"
		/>
		<router-link to="/other-page" class="auth-login__redirect">
			¿Olvidaste tu contraseña?
		</router-link>
		<sp-button
			text="Iniciar sesión"
			type="submit"
			class="auth-login__btn"
		/>
		<p class="auth-login__cta">
			¿No posees una cuenta?
			<router-link to="/other-page">
				Click aquí para crearte una
			</router-link>
		</p>
	</form>
</template>

<style lang="scss" scoped>
	.auth-login {
		@apply flex flex-col justify-center items-center;

		&__input,
		&__redirect,
		&__cta {
			@apply mt-4;
		}
		&__input {
			@apply w-full;
			@apply pr-5;
		}
		&__redirect {
			@apply self-end;
		}
		&__btn {
			@apply mt-6;
		}
	}
</style>
