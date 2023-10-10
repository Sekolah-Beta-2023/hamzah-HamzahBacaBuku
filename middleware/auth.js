import supabase from '~/utils/httpClients'

export default async function ({ route, store, redirect }) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const path = route.fullPath
    const isCreateOrEdit = path.includes('create') || path.includes('edit')

    if (!user && isCreateOrEdit) {
      store.commit('setAuth', false)
      return redirect('/login')
    }
    // Jika pengguna sudah login, set variabel auth menjadi true
    store.commit('setAuth', !!user)
  } catch (error) {
    store.commit('setAuth', false)
    console.error(
      'Terjadi kesalahan saat memeriksa status login:',
      error.message
    )
  }
}
