<template>
  <div class="pt-[80px] bg-crem">
    <div class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen">
      <div class="flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold">KATEGORI BUKU</h1>
        <nuxt-link
          v-if="$store.state.auth"
          :to="'/category/create'"
          class="p-4 bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="mt-8 p-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div
            v-for="(category, i) in categories"
            :key="i"
            class="bg-slate-100 text-secondary p-6 relative"
          >
            <nuxt-link :to="'category/' + category.title">
              <h1 class="font-bold text-lg text-center">
                {{ category.title }}
              </h1>
            </nuxt-link>
            <nuxt-link
              v-if="$store.state.auth"
              :to="'/category/edit/' + category.title"
              class="p-2 md:p-4 bg-amber-400 absolute top-0 left-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 64 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                />
              </svg>
            </nuxt-link>
            <button
              v-if="$store.state.auth"
              class="p-2 md:p-4 bg-red-200 absolute top-0 right-0"
              @click="hapusData(category.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import supabase from '~/utils/httpClients'
export default {
  data() {
    return {
      categories: null,
    }
  },
  async fetch() {
    const { data: category } = await supabase.from('category').select('*')

    this.categories = category
  },
  methods: {
    async hapusData(id) {
      const konfirmasi = window.confirm('Anda yakin ingin menghapus data ini?')

      if (konfirmasi) {
        try {
          await supabase.from('category').delete().eq('id', id)

          this.$fetch()
          this.$router.push('/category')
        } catch (error) {
          console.error(error)
        }
      }
    },
  },
}
</script>
