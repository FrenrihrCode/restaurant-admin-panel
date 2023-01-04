<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			modelValue?: string;
			type?: 'text' | 'date' | 'password' | 'email' | 'tel';
			color?: 'primary' | 'secondary';
			label?: string;
			placeholder?: string;
			disabled?: boolean;
			required?: boolean;
			readonly?: boolean;
		}>(),
		{ modelValue: '', type: 'text', color: 'primary' }
	);
	const emit = defineEmits<{
		(event: 'update:modelValue', value: string): void;
	}>();

	const data = useVModel(props, 'modelValue', emit);
</script>

<template>
	<label class="sp-input">
		<span v-if="label">{{ label }}</span>
		<div class="sp-input__container" :class="[color]">
			<slot name="before" />
			<input
				v-model="data"
				:type="type"
				:readonly="readonly"
				:placeholder="placeholder"
				:required="required"
				:disabled="disabled"
			/>
			<slot name="after" />
		</div>
	</label>
</template>

<style lang="scss" scoped>
	.sp-input {
		&__container {
			@apply cursor-text;
			@apply min-h-[33px];
			@apply shadow-sm;
			@apply rounded-3xl;
			@apply border-[1px];
			@apply text-text-title;
			@apply px-3 py-1;
			@apply relative;
			@apply flex items-center gap-1;

			&.primary {
				@apply bg-white;
				@apply border-primary;

				&:focus-within {
					@apply outline-1 outline-double outline-primary;
				}
			}
			&.secondary {
				@apply bg-white;

				&:focus-within {
					@apply border-primary;
				}
			}
		}
	}
</style>
