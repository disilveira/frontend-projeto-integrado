import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as users } from '../pages/users'
import { routes as userEdit } from '../pages/user-edit/'
import { routes as userDelete } from '../pages/user-delete'
import { routes as userCreate } from '../pages/user-create'

export default [
  ...auth,
  ...home,
  ...userEdit,
  ...userDelete,
  ...userCreate,
  ...users
]
