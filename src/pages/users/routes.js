export default [
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "Users" */ './Users')
  }
]
