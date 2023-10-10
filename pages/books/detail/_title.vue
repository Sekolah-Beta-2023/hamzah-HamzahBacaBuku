<script>
import supabase from '~/utils/httpClients'

export default {
  asyncData({ app }) {
    const auth = app.login
    return { auth }
  },
  data() {
    return {
      paramTitle: this.$route.params.title,
      book: '',
      bookImg: '',
      category: '',
      content: '',
      form: false,
      formContent: '',
      updateContent: false,
      formContentUpdate: {
        content: '',
        id: null,
      },
    }
  },
  async fetch() {
    await this.getBookData()
    this.getImg()
    await this.getContent()
  },
  methods: {
    async getBookData() {
      const { data } = await supabase
        .from('books')
        .select()
        .eq('title', this.paramTitle)
      this.book = data[0]
      // Get Category _ book
      const { data: category } = await supabase
        .from('category')
        .select()
        .eq('id', data[0].category_id)
      this.category = category[0].title
    },
    async getContent() {
      const { data: bookContent } = await supabase
        .from('books_content')
        .select()
        .order('created_at', { ascending: false })
        .eq('book_id', this.book.id)
      this.content = bookContent
    },
    async handleFormContent() {
      await supabase
        .from('books_content')
        .insert([{ book_id: this.book.id, content: this.formContent }])
      await this.getContent()
      this.formContent = ''
      this.form = false
    },
    async handleContentUpdate(id) {
      await supabase
        .from('books_content')
        .update({ content: this.formContentUpdate.content })
        .eq('id', id)
      await this.getContent()
      this.updateContent = false
    },
    async hapusData() {
      const konfirmasi = window.confirm('Anda yakin ingin menghapus data ini?')
      if (konfirmasi) {
        await supabase.from('books').delete().eq('id', this.book.id)
        await supabase.storage
          .from('bookImg')
          .remove([`books/${this.book.img_name}`])
        this.$router.push('/books')
        this.$fetch()
      }
    },
    async hapusContent(id) {
      const konfirmasi = window.confirm('Anda yakin ingin Content tersebut?')
      if (konfirmasi) {
        await supabase.from('books_content').delete().eq('id', id)
      }
      await this.getContent()
    },
    getImg() {
      // get Image from storage
      const { data } = supabase.storage
        .from('bookImg')
        .getPublicUrl(`books/${this.book.img_name}`)
      this.bookImg = data.publicUrl
    },
  },
}
</script>
<template>
  <div class="pt-[80px] bg-crem">
    <div class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen">
      <h1 class="text-4xl font-bold px-8 pt-16 pb-6">
        {{ book.title }}
      </h1>
      <div class="flex justify-between items-center p-4">
        <div
          class="w-full flex flex-wrap mb-10 border-b-2 md:border-0 border-[#001524]"
        >
          <div
            class="grow-0 shrink basis-full md:basis-1/2 lg:basis-1/4 flex justify-center items-center"
          >
            <img :src="bookImg" alt="" class="object-cover w-72 h-72" />
          </div>
          <div
            class="p-4 grow-0 shrink basis-full md:basis-1/2 lg:basis-3/4 text-[#001524] text-lg"
          >
            <p class="md:pr-4">
              <span class="font-bold">Judul: </span>{{ book.title }}
            </p>
            <p class="md:pr-4">
              <span class="font-bold">Penulis: </span>{{ book.penulis }}
            </p>
            <p class="md:pr-4">
              <span class="font-bold">Kategory: </span>{{ category }}
            </p>
            <p class="md:pr-4">
              <span class="font-bold">Deskripsi: </span>{{ book.description }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="$store.state.auth"
        class="flex justify-between items-center p-8"
      >
        <div class="flex gap-4">
          <button class="p-4 bg-red-600" @click="hapusData">
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
          <nuxt-link
            :to="'/books/edit/' + book.title"
            class="py-4 px-6 bg-amber-400"
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
        </div>
        <button class="p-4 bg-primary" @click="form = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      <div class="flex justify-between items-center px-2 md:px-16 pt-4 pb-32">
        <div id="book-list" class="w-full mt-8 p-4">
          <div class="flex items mb-3 flex-wrap gap-3 justify-center">
            <form
              v-if="form"
              class="w-full"
              @submit.prevent="handleFormContent"
            >
              <div class="relative">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="description"
                >
                  Tambah Content
                </label>
                <textarea
                  v-model="formContent"
                  name="formContent"
                  class="appearance-none block w-full bg-slate-100 text-secondary border-0 pt-12 pb-3 px-4 mb-3 leading-tight focus:outline-none"
                >
Deskripsi</textarea
                >
                <div class="flex absolute top-6 right-0">
                  <button
                    class="bg-primary text-pinky font-bold text-xl py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    href="/books"
                    class="bg-red-200 text-secondary font-bold text-xl py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="button"
                    @click="form = false"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
            <div
              v-for="(item, i) in content"
              :key="i"
              class="basis-full bg-slate-100 text-secondary p-6 relative"
            >
              <p class="text-lg pt-8">
                {{ item.content }}
              </p>
              <div class="p-2 text-slate-100 bg-primary absolute top-0 left-0">
                {{ i + 1 }}
              </div>
              <div v-if="$store.state.auth" class="flex absolute top-0 right-0">
                <button
                  class="p-4 bg-amber-400"
                  @click="
                    ;(formContentUpdate = {
                      content: item.content,
                      id: item.id,
                    }),
                      (updateContent = true)
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 64 512"
                  >
                    <path
                      d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                    />
                  </svg>
                </button>
                <button
                  @click="hapusContent(item.id)"
                  class="p-2 md:p-4 bg-red-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
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
    </div>
    <!-- pop up -->
    <div
      v-if="updateContent"
      class="fixed z-50 top-0 w-full min-h-screen flex items-center justify-center bg-black bg-opacity-70"
    >
      <div class="w-3/4 bg-crem p-4 text-primary shadow-lg z-30 rounded">
        <h2 class="text-2xl mb-4">Update Content</h2>
        <form @submit.prevent="handleContentUpdate(formContentUpdate.id)">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Content"
              >Content:</label
            >
            <textarea
              v-model="formContentUpdate.content"
              class="appearance-none block w-full bg-slate-100 text-secondary border-0 pt-12 pb-3 px-4 mb-3 leading-tight focus:outline-none"
              placeholder="Masukan Content"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
            <div
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              @click="updateContent = false"
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
