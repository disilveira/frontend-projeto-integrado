import * as types from './mutation-types'

export default {
  [types.SET_USERS] (state, payload) {
    state.users = payload
  }
}
