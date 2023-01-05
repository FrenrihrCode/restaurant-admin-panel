import FloatingVue from 'floating-vue';
import type { ViteSetupModule } from '@/types/ViteSetupModule';

export const install: ViteSetupModule = ({ app }) => {
	app.use(FloatingVue);
};
