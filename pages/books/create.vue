<template>
  <div class="bg-crem pt-[80px]">
    <div
      class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen flex justify-center"
    >
      <form
        enctype="multipart/form-data"
        class="w-full max-w-2xl p-4"
        @submit.prevent="onFormSubmit"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="title"
            >
              Judul Buku
              <span v-if="error" class="text-red-600"
                >*Judul Buku sudah ada</span
              >
            </label>
            <input
              id="title"
              v-model="data.title"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Book Title"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="thumbnail"
            >
              Gambar Buku
            </label>
            <input
              id="berkas"
              ref="fileInput"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="berkas"
              type="file"
              accept="image/*"
              placeholder="Thumbnail"
              required
              @change="nameImg"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="penulis"
            >
              Penulis
            </label>
            <input
              id="penulis"
              v-model="data.penulis"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Penulis"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              for="countries"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Select Kategori</label
            >
            <select
              id="category"
              v-model="data.category_id"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option
                v-for="(category, i) in categories"
                :key="i"
                :value="category.id"
              >
                {{ category.title }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="description"
            >
              Deskripsi
            </label>
            <textarea
              v-model="data.description"
              name="description"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
Deskripsi</textarea
            >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3">
            <button
              class="bg-primary text-pinky font-bold text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <nuxt-link
              to="/books"
              class="bg-red-200 ml-4 text-secondary font-bold text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import supabase from '~/utils/httpClients'

export default {
  data() {
    return {
      data: {
        title: '',
        description: '',
        penulis: '',
        category_id: null,
        img_name: null,
      },
      error: false,
      categories: null,
    }
  },
  async fetch() {
    const { data } = await supabase.from('category').select('*')
    this.categories = data
  },
  methods: {
    async onFormSubmit() {
      // Cek apakah judul buku sudah ada
      const { data: existingBooks } = await supabase
        .from('books')
        .select('*')
        .eq('title', this.data.title)
      // Jika sudah ada, tampilkan error
      if (existingBooks.length !== 0) {
        this.error = true
      } else {
        // Jika judul buku belum ada, tambahkan buku baru
        await supabase.from('books').insert(this.data)
        // Upload gambar
        if ((await this.checkDuplicateImg()) === 0) {
          await supabase.storage
            .from('bookImg')
            .upload(
              'books/' + this.data.img_name,
              this.$refs.fileInput.files[0]
            )
        } else {
          await supabase.storage
            .from('bookImg')
            .update(
              'books/' + this.data.img_name,
              this.$refs.fileInput.files[0]
            )
        }

        this.$router.push('/books')
      }
    },
    async checkDuplicateImg() {
      const { data } = await supabase.storage.from('bookImg').list('books', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
        search: this.data.title,
      })
      return data.length
    },
    nameImg() {
      const imgPath = this.$refs.fileInput.files[0]
      const time = new Date()
      this.data.img_name =
        imgPath.name + time.getTime().toString().replace(/\s/g, '')
    },
  },
}
</script>
