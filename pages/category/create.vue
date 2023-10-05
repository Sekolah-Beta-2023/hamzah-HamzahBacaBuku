<template>
  <div class="bg-crem pt-[80px]">
    <div
      class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen flex justify-center"
    >
      <form class="w-full max-w-2xl p-4" @submit.prevent="onFormSubmit">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="title"
            >
              Judul Category
              <span v-if="error" class="text-red-700">*Category sudah ada</span>
            </label>
            <input
              id="title"
              v-model="data.title"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="title"
              type="text"
              placeholder="Book Title"
              required
            />
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
            <a
              href="/category"
              class="bg-red-200 ml-4 text-secondary font-bold text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        title: '',
      },
      error: false,
    }
  },
  methods: {
    async onFormSubmit() {
      try {
        const response = await this.$axios.get(
          `/rest/v1/category?title=eq.${this.data.title}`
        )
        if (response.data.length !== 0) {
          this.error = true
        } else {
          await this.$axios.post('/rest/v1/category', this.data)

          this.$router.push('/category')
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
