import {
	createRouter,
	createWebHistory,
	createMemoryHistory,
} from 'vue-router/auto';

export const router = createRouter({
	history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
	// You don't need to pass the routes anymore,
	// the plugin writes it for you 🤖
});
