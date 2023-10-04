<template>
  <div class="bg-crem pt-[80px]">
    <div
      class="border-x-2 mx-6 md:mx-16 border-[#001524] min-h-screen flex justify-center"
    >
      <form class="w-full max-w-2xl p-4">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="title"
            >
              Judul Buku
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
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
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="thumbnail"
              type="file"
              placeholder="Book Title"
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
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="penulis"
              type="text"
              placeholder="Penulis"
            />
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
              type="button"
            >
              Save
            </button>
            <a
              href="/books"
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
