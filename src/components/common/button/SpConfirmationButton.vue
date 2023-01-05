<script lang="ts" setup>
	const props = defineProps<{
		messages: string[];
	}>();
	const emit = defineEmits([
		'confirmationSuccess',
		'confirmationIncremented',
		'confirmationReset',
	]);

	const currentStep = ref(0);
	const messageList = computed(() => {
		return props.messages
			? props.messages
			: ['Click aquí para confirmar', '¿Estás seguro?', '✔'];
	});
	const currentMessage = computed(() => {
		return messageList.value[currentStep.value];
	});
	const lastMessageIndex = computed(() => {
		return messageList.value.length - 1;
	});
	const stepsComplete = computed(() => {
		return currentStep.value === lastMessageIndex.value;
	});

	const incrementStep = () => {
		currentStep.value++;
		if (stepsComplete.value) {
			emit('confirmationSuccess');
		} else {
			emit('confirmationIncremented');
		}
	};
	const reset = () => {
		currentStep.value = 0;
		emit('confirmationReset');
	};

	defineExpose({ reset, incrementStep });
</script>

<template>
	<button
		class="confirmation-button"
		:class="{ 'is-completed': stepsComplete }"
		:disabled="stepsComplete"
		@click="incrementStep()"
	>
		{{ currentMessage }}
	</button>
</template>
