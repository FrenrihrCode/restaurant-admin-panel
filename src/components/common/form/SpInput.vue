<template>
	<div class="sp-input">
		<label>
			<span v-if="label">{{ label }}</span>
			<input
				v-model="data"
				:type="type"
				:readonly="readonly"
				:placeholder="placeholder"
				:required="required"
				:disabled="disabled"
			/>
		</label>
	</div>
</template>

<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			modelValue?: string;
			type?: 'text' | 'date' | 'password' | 'email' | 'tel';
			label?: string;
			placeholder?: string;
			disabled?: boolean;
			required?: boolean;
			readonly?: boolean;
		}>(),
		{ modelValue: '', type: 'text' }
	);
	const emit = defineEmits<{
		(event: 'update:modelValue', value: string): void;
	}>();

	const data = useVModel(props, 'modelValue', emit);
</script>

<style lang="scss" scoped></style>
