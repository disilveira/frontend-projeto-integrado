export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ './pages/Login')
  },
  {
    path: '/request-password',
    name: 'RequestPassword',
    component: () => import(/* webpackChunkName: "RequestPassword" */ './pages/RequestPassword')
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "ChangePassword" */ './pages/ChangePassword')
  }
]
