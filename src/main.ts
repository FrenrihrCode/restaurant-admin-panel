import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import '@/styles/index.scss';
import { ViteSetupModule } from './types/ViteSetupModule';
import { routes } from 'vue-router/auto/routes';
import { setupLayouts } from 'virtual:generated-layouts';

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
