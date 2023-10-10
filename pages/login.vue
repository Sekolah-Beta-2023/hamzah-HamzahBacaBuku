<script>
import supabase from '~/utils/httpClients'
export default {
  layout(context) {
    return 'login'
  },
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
      successMsg: '',
    }
  },
  methods: {
    async signIn() {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        })
        console.log(data)
        if (error) throw error
        this.$router.push('/')
      } catch (error) {
        this.errorMsg = error.message
      }
    },
  },
}
</script>

<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-primary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-crem md:text-2xl"
          >
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="signIn">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-crem dark:text-white"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-crem hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-crem font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-crem">
              Don’t have an account yet?
              <a href="/register" class="text-pinky font-bold hover:underline"
                >Sign up</a
              >
            </p>
            <p class="text-sm font-light text-red-500">
              {{ errorMsg }}
            </p>
            <p class="text-sm font-light text-green-500">
              {{ successMsg }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
