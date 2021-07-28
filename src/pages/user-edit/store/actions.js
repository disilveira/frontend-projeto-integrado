import services from '@/http'
import * as types from './mutation-types'

export const ActionFindUser = ({ commit }, payload) => (
  services.showUser.findUser({ id: payload }).then(res => {
    commit(types.SET_USER_TO_EDIT, res.data)
  })
)

export const ActionUpdateUser = (payload) => {
  return services.showUser.updateUser(payload).then(res => {
    console.log(res)
  })
}
