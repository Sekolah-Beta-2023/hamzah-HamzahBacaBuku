import supabase from '~/utils/httpClients'

export default async function ({ route, app, redirect }, next) {
  console.log('Middleware dijalankan')
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const path = route.fullPath
    const isCreateOrEdit = path.includes('create') || path.includes('edit')

    if (user === null && isCreateOrEdit) {
      return redirect('/login')
    }
    console.log(user)
    app.login = !!user
  } catch (error) {
    app.login = false
    console.error(
      'Terjadi kesalahan saat memeriksa status login:',
      error.message
    )
  }
  // console.clear()
  next()
}
