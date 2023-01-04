<script lang="ts" setup>
	withDefaults(
		defineProps<{
			text: string;
			type?: 'button' | 'submit' | 'reset';
			color?: 'primary' | 'secondary' | 'ghost';
			disabled?: boolean;
			loading?: boolean;
		}>(),
		{ type: 'button', color: 'primary' }
	);
</script>

<template>
	<button class="sp-button" :class="[color]" :type="type">
		{{ text }}
	</button>
</template>

<style lang="scss" scoped>
	.sp-button {
		&.primary {
			@apply bg-primary;
			@apply text-white;
			@apply text-body;

			&:hover {
				@apply bg-opacity-80;
			}
			&:focus,
			&:active {
				@apply bg-opacity-80;
				@apply outline-none;
				@apply ring ring-primary;
			}
		}
	}
</style>
