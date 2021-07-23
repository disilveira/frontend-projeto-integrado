import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as users } from '../pages/users'

export default [
  ...auth,
  ...home,
  ...users
]
