export default [
  {
    path: '/user/delete/:id',
    name: 'User-Delete',
    component: () => import(/* webpackChunkName: "User-Delete" */ './UserDelete')
  }
]
