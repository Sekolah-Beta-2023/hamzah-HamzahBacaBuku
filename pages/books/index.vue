<template>
  <div class="pt-[80px] bg-crem">
    <div class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen">
      <div class="flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold">RINGKASAN BUKU-BUKU</h1>
        <nuxt-link
          v-if="$store.state.auth"
          :to="'/books/create'"
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
      <div id="book-list" class="w-full mt-8 p-4">
        <div class="flex items mb-3 flex-wrap gap-3 justify-center">
          <nuxt-link
            v-for="(book, i) in books"
            :key="i"
            :to="'books/detail/' + book.title"
            class="basis-full lg:basis-2/5 bg-slate-100 text-secondary p-6"
          >
            <h1 class="font-bold text-lg">{{ book.title }}</h1>
            <p class="text-sm">
              {{ book.description }}
            </p>
          </nuxt-link>
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
      books: null,
    }
  },
  async fetch() {
    const { data } = await supabase
      .from('books')
      .select()
      .order('created_at', { ascending: false })
    this.books = data
  },
  updated() {
    this.$fetch()
  },
  methods: {},
}
</script>
