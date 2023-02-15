<template>
  <div class="container px-5 mx-auto md:flex justify-between py-5">
    <div class="md:w-2/3 hidden md:flex">
      <dropdown :menu="menu"></dropdown>
      <input
        type="search"
        class="
          mr-px
          w-full
          border-none
          bg-pink-100
          px-4
          py-2
          text-sm text-pink-600
          shadow-sm
          hover:bg-pink-200
          focus:outline-none
        "
        placeholder="ابحث هنا"
      />
      <button
        type="button"
        class="
          rounded-l-md
          mr-px
          px-4
          py-2
          text-sm
          bg-pink-600
          hover:bg-pink-500
          text-white
        "
      >
      <i class="fa-solid fa-magnifying-glass"></i>

      </button>
    </div>
    <div class="md:w-1/3 md:flex md:flex-row-reverse">
      <nuxt-link to="/">
        <img class="w-28 m-auto md:m-0" src="~/assets/images/logo.png" alt="Mazaady" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Dropdown from "./Dropdown.vue";
export default {
  name: "TopHeader",
  components: { Dropdown },
  data() {
    return {
      menu: ["الخيار الأول ", "الخيار الثاني", "مزاد مباشر متعدد"],
    };
  },
};
</script>
