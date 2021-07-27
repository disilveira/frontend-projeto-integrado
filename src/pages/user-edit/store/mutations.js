import * as types from './mutation-types'

export default {
  [types.SET_USER_TO_EDIT] (state, payload) {
    state.user_to_edit = payload
  }
}
