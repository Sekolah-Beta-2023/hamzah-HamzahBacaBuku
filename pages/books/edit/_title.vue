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
        <div class="flex flex-wrap -mx-3 mb-6 justify-center">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <img
              class="h-auto max-w-xs rounded-lg"
              :src="imgUrl"
              alt="image description"
            />
          </div>

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
              placeholder="Thumbnail"
              @change="handleChangeImg"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
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
            <button
              @click="$router.go(-1)"
              class="bg-red-200 ml-4 text-secondary font-bold text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
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
      param: this.$route.params.title,
      data: '',
      error: false,
      categories: null,
      imgUrl: '',
      oldImgName: '',
    }
  },
  async fetch() {
    await this.getBookData()
    await this.getCategories()
  },
  methods: {
    async getBookData() {
      const { data: books } = await supabase
        .from('books')
        .select('*')
        .eq('title', this.param)
      this.data = books[0]
      this.oldImgName = books[0].img_name
      this.getImg('books', books[0].img_name)
    },
    async getCategories() {
      const { data } = await supabase.from('category').select('*')
      this.categories = data
    },

    async handleChangeImg() {
      this.nameImg()
      await supabase.storage
        .from('bookImg')
        .remove([`preview/${this.data.img_name}`])

      await supabase.storage
        .from('bookImg')
        .upload('preview/' + this.data.img_name, this.$refs.fileInput.files[0])

      this.getImg('preview', this.data.img_name)
    },
    async onFormSubmit() {
      // Cek apakah judul buku sudah ada
      const { data: existingBooks } = await supabase
        .from('books')
        .select('*')
        .eq('title', this.data.title)
        .neq('id', this.data.id)
      // Jika sudah ada, tampilkan error
      if (existingBooks.length !== 0) {
        this.error = true
      } else {
        // update data
        await supabase.from('books').update(this.data).eq('id', this.data.id)
        // Upload gambar ke penyimpanan
        if (this.$refs.fileInput.files[0]) {
          await supabase.storage
            .from('bookImg')
            .remove(['preview/' + this.data.img_name])
          await supabase.storage
            .from('bookImg')
            .remove(['books/' + this.oldImgName])
          await supabase.storage
            .from('bookImg')
            .upload(
              'books/' + this.data.img_name,
              this.$refs.fileInput.files[0]
            )
        }
        // Pindahkan pengguna ke halaman '/books'
        this.$router.push('/books')
      }
    },
    async checkDuplicateImg(path) {
      const { data } = await supabase.storage.from('bookImg').list(path, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
        search: this.data.img_name,
      })
      return data.length
    },
    getImg(path, file) {
      const { data } = supabase.storage
        .from('bookImg')
        .getPublicUrl(`${path}/` + file)
      this.imgUrl = data.publicUrl
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
