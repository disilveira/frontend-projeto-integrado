import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as users } from '../pages/users'
import { routes as userEdit } from '../pages/user-edit/'

export default [
  ...auth,
  ...home,
  ...userEdit,
  ...users
]
