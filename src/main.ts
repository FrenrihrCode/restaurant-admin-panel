import '@/styles/index.scss';
import 'floating-vue/dist/style.css';
import { routes } from 'vue-router/auto/routes';
import { setupLayouts } from 'virtual:generated-layouts';
import { ViteSSG } from 'vite-ssg';
import type { ViteSetupModule } from './types/ViteSetupModule';
import App from '@/App.vue';

export const createApp = ViteSSG(
	App,
	{ routes: setupLayouts(routes) },
	async ctx => {
		Object.values(
			import.meta.glob<{ install: ViteSetupModule }>('./modules/*.ts', {
				eager: true,
			})
		).map(i => i.install?.(ctx));
	},
	{}
);
