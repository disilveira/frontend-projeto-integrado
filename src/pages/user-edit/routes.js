export default [
  {
    path: '/user/:id',
    name: 'User-Edit',
    component: () => import(/* webpackChunkName: "User-Edit" */ './UserEdit')
  }
]
