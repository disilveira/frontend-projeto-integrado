import services from '@/http'
import * as types from './mutation-types'

export const ActionListUsers = ({ commit }) => (
  services.users.listUsers().then(res => {
    commit(types.SET_USERS, res.data)
  })
)
