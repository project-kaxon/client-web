import { createRouter, createWebHistory } from 'vue-router'

import { currentOverviewDefault } from '../stores/plugins'

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// new routes
		{
			path: '/',
			redirect: '/overview',
		},
		{
			path: '/overview',
			redirect: `/overview/${currentOverviewDefault}`,
		},
		{
			path: '/overview/:pluginName',
			component: () => import('@/views/ViewOverview.vue'),
			props: true,
		},
		{
			path: '/pod/:uuid',
			component: () => import('@/views/ViewPod.vue'),
			props: true,
		},
		{
			path: '/note-old',
			component: () => import('@/views/ViewNote.vue'),
		},
	],
})
