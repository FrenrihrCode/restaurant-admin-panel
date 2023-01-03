<script setup lang="ts">
	useHead({
		title: 'Other Pages',
	});
</script>

<template>
	<div>
		<p>{{ 'pages.other.desc' }}</p>
		<router-link
			:to="{ name: 'home' }"
			class="mt-5 hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
			>{{ 'pages.home' }}</router-link
		>
	</div>
</template>

<style scoped></style>

<route lang="json">
{
	"name": "other-page"
}
</route>
