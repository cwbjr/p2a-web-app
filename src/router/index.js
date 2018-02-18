import Vue from 'vue';
import Router from 'vue-router';
import Brochure from '@/components/Brochure';
import Classes from '@/components/Classes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Brochure',
      component: Brochure,
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes,
    },
  ],
});
