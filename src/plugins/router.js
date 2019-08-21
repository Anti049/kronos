import Vue from 'vue';
import Router from 'vue-router';

import RootPage from '@/pages/RootPage';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Root',
			component: RootPage,
		},
	],
});
