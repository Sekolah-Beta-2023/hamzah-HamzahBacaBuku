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
      <ul class="flex">
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
  </div>
</template>

<script>
export default {}
</script>
