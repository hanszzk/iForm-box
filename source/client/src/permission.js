import router from './router';
// import store from './store';
// import { Message } from 'element-ui';

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  const hasToken = sessionStorage.getItem('token');
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/home' });
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
});
