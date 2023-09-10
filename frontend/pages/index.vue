<template>
  <div>
    <!-- Hero Section Start -->
    <div class="w-full pt-24 pb-11 lg:h-screen bg-white">
      <div
        class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <div class="w-full grid sm:grid-cols-2 gap-8">
          <div>
            <h1 class="text-5xl lg:text-7xl font-bold">
              Setiap halaman adalah petualangan literatur yang tak terlupakan
            </h1>
            <div class="md:w-[160px] w-32">
              <nuxt-link
                class="text-black group border-black border-2 py-1 px-2 md:py-3 md:px-5 my-2 flex items-center hover:bg-black hover:text-white"
                to="/book"
                >Lihat Buku
                <span class="group-hover:translate-x-2 duration-300">
                  <fa class="ml-3" :icon="['fas', 'arrow-right']" />
                </span>
              </nuxt-link>
            </div>
          </div>
          <div class="object-cover">
            <img
              :src="require(`~/assets/img/book-home.jpg`)"
              alt="jumbotron-book"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Section End -->
    <!-- Book Section Start  -->
    <section class="pt-16 pb-16">
      <div class="p-4 max-w-[1000px] mx-auto">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h2
              class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl"
            >
              Buku Terkini
            </h2>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="mb-10 overflow-hidden rounded-xl bg-lime-400">
            <a href="">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                class="w-full"
              />
              <div class="p-4">
                <h3
                  class="mb-3 block truncate text-xl font-semibold text-white hover:underline"
                >
                  Tips Belajar Programming
                </h3>
              </div>
            </a>
          </div>
          <div class="mb-10 overflow-hidden rounded-xl bg-lime-400">
            <a href="">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                class="w-full"
              />
              <div class="p-4">
                <h3
                  class="mb-3 block truncate text-xl font-semibold text-white hover:underline"
                >
                  Tips Belajar Programming
                </h3>
              </div>
            </a>
          </div>
          <div class="mb-10 overflow-hidden rounded-xl bg-lime-400">
            <a href="">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                class="w-full"
              />
              <div class="p-4">
                <h3
                  class="mb-3 block truncate text-xl font-semibold text-white hover:underline"
                >
                  Tips Belajar Programming
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Book Section End  -->
    <!-- Category Section Start -->
    <section class="w-full bg-white my-auto py-36">
      <div
        class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div>
          <p
            class="text-4xl text-black inline font-bold border-b-4 border-gray-700"
          >
            Category
          </p>
        </div>
        <div
          class="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 uppercase"
        >
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Fanstasi</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Non Fiksi</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Romance</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Science Fiction</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Horror</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Misteri</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Thriller</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Komedi</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Sejarah</p>
          </div>
          <div
            class="shadow-sm w-40 odd:bg-white even:bg-lime-300 shadow-gray-300 hover:scale-110 duration-500"
          >
            <p class="my-4">Fan Fiction</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Category Section End -->
  </div>
</template>

<script>
// import img1 from 'assets/img/atomic-habits.png'
export default {
  data() {
    return {
      book: [
        {
          booksName: 'atomic-habits',
          url: 'atomic-habits.jpg',
        },
        {
          booksName: 'atomic-habits',
          url: 'atomic-habits.jpg',
        },
      ],
    }
  },
}
</script>
<style></style>
