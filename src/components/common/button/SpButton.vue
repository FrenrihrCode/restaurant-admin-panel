<template>
	<button :class="[style, 'sp-button']" :type="type">
		{{ text }}
	</button>
</template>

<script lang="ts" setup>
	withDefaults(
		defineProps<{
			text: string;
			type?: 'button' | 'submit' | 'reset';
			style?: 'primary' | 'secondary' | 'ghost';
			disabled?: boolean;
			loading?: boolean;
		}>(),
		{ type: 'button', style: 'primary' }
	);
</script>

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
