export default [
  {
    path: '/users/create',
    name: 'User-Create',
    component: () => import(/* webpackChunkName: "User-Create" */ './UserCreate')
  }
]
