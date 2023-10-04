<template>
  <div
    class="fixed w-full h-[80px] flex justify-between items-center px-4 md:px-16 bg-[#445D48] border-[#001524] border-b-2 z-10"
  >
    <div class="ml-4">
      <h1 class="font-bold text-lg md:text-2xl text-[#001524]">
        HAMZAHBACABUKU
      </h1>
    </div>
    <div>
      <ul class="hidden md:flex text-[#001524]">
        <li class="px-4 py-2 hover:text-[#D6CC99] font-bold">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="px-4 py-2 hover:text-[#D6CC99] font-bold">
          <nuxt-link to="/books">Books</nuxt-link>
        </li>
        <li class="px-4 py-2 hover:text-[#D6CC99] font-bold">
          <nuxt-link to="/category">Category</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- humberger -->
    <div class="md:hidden z-10" @click="nav = !nav">
      <fa v-if="!nav" :icon="['fas', 'bars']" class="text-[#001524]" />
      <fa v-else :icon="['fas', 'x']" class="text-[#001524]" />
    </div>
    <!-- mobile navbar -->
    <ul
      :class="[
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-[#001524]',
      ]"
    >
      <li
        class="py-6 text-4xl hover:text-[#D6CC99] font-bold"
        @click="nav = !nav"
      >
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li
        class="py-6 text-4xl hover:text-[#D6CC99] font-bold"
        @click="nav = !nav"
      >
        <nuxt-link to="/books">Books</nuxt-link>
      </li>
      <li
        class="py-6 text-4xl hover:text-[#D6CC99] font-bold"
        @click="nav = !nav"
      >
        <nuxt-link to="/category">Category</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    }
  },
}
</script>
