<template>
  <div class="bg-gradient-to-r from-pink-600 to-fuchsia-900">
    <div class="container px-5 mx-auto flex justify-between py-5">
      <ul class="m-0 hidden text-white text-sm md:flex items-center gap-7">
        <li class="inline cursor-pointer">الرئيسية</li>
        <li class="inline cursor-pointer">التصنيفات</li>
        <li class="inline cursor-pointer">مشترياتي</li>
        <li class="inline cursor-pointer">حسابي</li>
      </ul>
      <fa class="m-0 block text-white text-sm md:hidden" icon="bars" />
      <div class="flex items-center gap-4">
        <button type="button" class="text-sm text-white">
          <fa icon="dollar-sign" />
          <!-- <i class="fa-solid fa-money-check-dollar"></i> -->
        </button>
        <button type="button" class="text-sm text-white">
          <fa icon="bell" />
        </button>
        <button type="button" class="text-sm text-white">
          <fa icon="heart" />
        </button>
        <button
          type="button"
          class="
            flex
            h-5
            shadow-md
            justify-center
            items-center
            text-white
            bg-amber-400
            rounded-full
            text-sm
            px-2
          "
        >
          {{ "عربية" }}
          <fa class="-ml-1 mr-1 h-2 w-2" icon="chevron-down" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
  components: {},
  data() {
    return {};
  },
};
</script>
