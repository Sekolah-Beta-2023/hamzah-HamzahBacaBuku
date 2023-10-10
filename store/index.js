export const state = () => ({
  auth: false, // Inisialisasi auth dengan false
})

export const mutations = {
  setAuth(state, value) {
    state.auth = value
  },
}
