<template>
  <div>
    <!-- Hero Section Start -->
    <div class="w-full pt-[80px] lg:h-screen bg-[#445D48] px-4 md:px-16">
      <div
        class="h-full border-x-2 border-[#001524] flex justify-center items-center"
      >
        <div
          class="flex justify-center items-center pt-4 md:pt-0 px-4 md:px-16 flex-wrap"
        >
          <div class="grow-0 shrink basis-full md:basis-1/2">
            <h1 class="text-6xl md:text-8xl text-[#fde5d4] font-bold">
              TEMUKAN RINGKASAN BUKU BUKU
            </h1>
            <div class="max-w-[160px]">
              <a
                href="/books"
                class="text-[#fde5d4] border-[#001524] border-2 py-3 px-5 my-2 flex items-center hover:bg-[#fde5d4] hover:text-[#001524] hover:border-[#fde5d4]"
                >Lihat Buku<span
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    class="ml-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path></svg></span
              ></a>
            </div>
          </div>
          <div class="grow-0 shrink basis-full md:basis-1/2">
            <div class="flex justify-center items-center">
              <img src="~/assets/img/books-3d.png" class="w-[400px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Section End -->
    <!-- Category Section Start -->
    <div class="w-full bg-[#fde5d4] px-4 md:px-16">
      <div class="border-x-2 border-[#001524]">
        <div class="flex justify-center items-center flex-wrap">
          <div
            class="grow-0 shrink basis-1/2 md:basis-1/4 p-8 text-center border-r-2 border-[#001524] border-b-2 md:border-b-0"
          >
            <a href="/home" class="text-[#001524]">Komedi</a>
          </div>
          <div
            class="grow-0 shrink basis-1/2 md:basis-1/4 p-8 text-center md:border-r-2 border-[#001524] border-b-2 md:border-b-0"
          >
            <a href="/home" class="text-[#001524]">Fantasi</a>
          </div>
          <div
            class="grow-0 shrink basis-1/2 md:basis-1/4 p-8 text-center border-r-2 border-[#001524] border-b-2 md:border-b-0"
          >
            <a href="/home" class="text-[#001524]">Life</a>
          </div>
          <div
            class="grow-0 shrink basis-1/2 md:basis-1/4 p-8 text-center border-[#001524] border-b-2 md:border-b-0"
          >
            <a href="/home" class="text-[#001524]">Romance</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Category Section End -->
    <!-- Buku Section Start -->
    <div class="w-full bg-[#D6CC99] px-4 md:px-16">
      <div class="border-x-2 border-[#001524]">
        <div class="flex-col justify-center py-10">
          <div
            class="w-full flex flex-wrap items-center mb-10 border-b-2 md:border-0 border-[#001524]"
          >
            <div
              class="grow-0 shrink basis-full md:basis-1/2 flex justify-center items-center"
            >
              <img
                src="~/assets/img/atomic-habits.jpg"
                alt=""
                class="object-cover w-72 h-72"
              />
            </div>
            <div
              class="p-4 grow-0 shrink basis-full md:basis-1/2 text-[#001524]"
            >
              <h4 class="text-2xl font-bold">Atomic Habits</h4>
              <p class="md:pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                ducimus incidunt asperiores officiis! Repellat sequi velit quod
                magni nisi numquam at, impedit quasi quae fugiat a, obcaecati,
                est ullam! Praesentium.
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-wrap items-center mb-10 border-b-2 md:border-0 border-[#001524]"
          >
            <div
              class="grow-0 shrink basis-full md:basis-1/2 flex justify-center items-center md:order-last"
            >
              <img
                src="~/assets/img/ThePsychologyofMoney.jpg"
                alt=""
                class="object-cover w-72 h-72"
              />
            </div>
            <div
              class="p-4 grow-0 shrink basis-full md:basis-1/2 text-[#001524]"
            >
              <h4 class="text-2xl font-bold md:text-end">Atomic Habits</h4>
              <p class="md:text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                ducimus incidunt asperiores officiis! Repellat sequi velit quod
                magni nisi numquam at, impedit quasi quae fugiat a, obcaecati,
                est ullam! Praesentium.
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-wrap items-center mb-10 border-b-2 md:border-0 border-[#001524]"
          >
            <div
              class="grow-0 shrink basis-full md:basis-1/2 flex justify-center items-center"
            >
              <img
                src="~/assets/img/Thinking-Fast-and-Slow.png"
                alt=""
                class="object-cover w-72 h-72"
              />
            </div>
            <div
              class="p-4 grow-0 shrink basis-full md:basis-1/2 text-[#001524]"
            >
              <h4 class="text-2xl font-bold">Atomic Habits</h4>
              <p class="md:pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                ducimus incidunt asperiores officiis! Repellat sequi velit quod
                magni nisi numquam at, impedit quasi quae fugiat a, obcaecati,
                est ullam! Praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Buku Section End -->
    <!-- Quotes Section Start -->
    <div class="w-full bg-[#445D48] px-4 md:px-16">
      <div class="border-x-2 border-[#001524]">
        <div class="flex justify-center items-center">
          <div class="max-w-[500px] py-8 text-center text-[#fde5d4]">
            <p class="font-medium text-xl">
              "Makin aku banyak membaca, makin banyak aku berpikir ; makin aku
              belajar, makin aku sadar bahwa aku tak mengetahui apapun"
            </p>
            <h5 class="font-bold">-Voltaire</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Quotes Section End -->
    <!-- Contact Section Start -->
    <div
      name="contact"
      class="w-full bg-[#fde5d4] text-[#001524] px-4 md:px-16"
    >
      <div
        class="border-x-2 border-[#001524] flex py-8 justify-center items-center"
      >
        <form
          method="POST"
          action="https://getform.io/f/0637a84b-3013-490c-9850-18684335cb3e"
          class="flex flex-col max-w-[600px] w-full"
        >
          <div class="pb-8">
            <p class="text-4xl inline font-bold border-b-4 border-[#001524]">
              Contact
            </p>
          </div>
          <input
            type="text"
            class="text-white p-2 bg-[#445D48]"
            placeholder="Name"
            name="name"
          /><input
            type="email"
            class="text-white my-4 p-2 bg-[#445D48]"
            placeholder="Your Email"
            name="email"
          /><textarea
            class="bg-[#445D48] p-2 text-white"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea
          ><button
            class="text-[#445D48] border-[#445D48] border-2 py-3 px-5 my-2 flex items-center hover:bg-[#445D48] hover:text-[#001524] hover:border-[#445D48] mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <!-- Contact Section End -->
  </div>
</template>

<script>
// import img1 from 'assets/img/atomic-habits.png'
export default {}
</script>
<style></style>
