export default [
  {
    path: '/users/:id',
    name: 'User-Edit',
    component: () => import(/* webpackChunkName: "User-Edit" */ './UserEdit')
  }
]
