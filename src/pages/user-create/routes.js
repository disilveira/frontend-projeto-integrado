export default [
  {
    path: '/user/create',
    name: 'User-Create',
    component: () => import(/* webpackChunkName: "User-Create" */ './UserCreate')
  }
]
