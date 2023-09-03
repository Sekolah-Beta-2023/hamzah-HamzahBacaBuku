<template>
  <div
    class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black border-black border-b-[1px]"
  >
    <div class="ml-4">
      <h1 class="font-bold text-2xl">
        <span class="text-teal-500">Hamzah</span>BacaBuku
      </h1>
    </div>
    <div>
      <ul class="hidden md:flex">
        <li class="px-4 py-2 border-black border-l-[1px]">
          <nuxt-link to="/home">Home</nuxt-link>
        </li>
        <li class="px-4 py-2 border-black border-l-[1px]">
          <nuxt-link to="/books">Books</nuxt-link>
        </li>
        <li class="px-4 py-2 border-black border-l-[1px]">
          <nuxt-link to="/category">Category</nuxt-link>
        </li>
        <li class="px-4 py-2 border-black border-l-[1px]">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- humberger -->
    <div class="md:hidden z-10" @click="nav = !nav">
      <fa v-if="!nav" :icon="['fas', 'bars']" />
      <fa v-else :icon="['fas', 'x']" />
    </div>
    <!-- mobile navbar -->
    <ul
      :class="[
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center',
      ]"
    >
      <li class="py-6 text-4xl">
        <nuxt-link to="/home">Home</nuxt-link>
      </li>
      <li class="py-6 text-4xl">
        <nuxt-link to="/books">Books</nuxt-link>
      </li>
      <li class="py-6 text-4xl">
        <nuxt-link to="/category">Category</nuxt-link>
      </li>
      <li class="py-6 text-4xl">
        <nuxt-link to="/about">About</nuxt-link>
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
