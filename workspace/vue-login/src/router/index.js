import { createRouter, createWebHistory } from 'vue-router';
import AppHeader from '../components/AppHeader.vue';
import AppView from '../components/AppView.vue';
import AppNav from '../components/AppNav.vue';
import AppLogin from '../components/AppLogin.vue';
import BoxComponent from '../components/BoxComponent.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			components: {
				default: AppView,
				header: AppHeader,
				nav: AppNav,
				box: BoxComponent,
			},
		},
		{
			path: '/login',
			name: 'Login',
			component: AppLogin,
		},
	],
});

export default router;
