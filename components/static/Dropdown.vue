<template>
  <div class="relative" v-click-outside="hide"
      @focusin="show = true">
    <div class="">
      <button
        type="button"
        class="
          inline-flex
          justify-center
          rounded-r-md
          w-40
          border-none
          bg-pink-100
          px-4
          py-2
          text-sm
          font-medium
          text-pink-600
          shadow-sm
          hover:bg-pink-200
          focus:outline-none
          focus:ring-offset-gray-100
        "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {{selected}}
        <fa class=" text-xs -ml-1 mr-2 h-5 w-5" icon="chevron-down" />
      </button>
    </div>
    <ul
        v-if="show && menu.length > 0"
        class="
          absolute
          z-10
          mt-1
          max-h-56
          w-full
          overflow-auto
          rounded-md
          bg-white
          py-1
          text-base
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          sm:text-sm
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          @click="select(index)"
          v-for="(item, index) in menu"
          :key="index * 0.25 + 0.98 "
          class="
            text-gray-900
            relative
            cursor-default
            select-none
            py-2
            pr-3
            pl-9
          "
          id="listbox-option-0"
          role="option"
        >
          <div class="flex items-center">
            <span class="font-normal mr-3 block truncate">{{ item }}</span>
          </div>
          <!-- <span
            v-if="selected ? selected.id == item.id : false"
            class="
              text-indigo-600
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-4
            "
          >

            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
          </span> -->
        </li>

        <!-- More items... -->
      </ul>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name :"Dropdown",
  props:{
    menu : {
      type:Array,
      require:true,
    }
  },
  data() {
    return {
      show:false,
      selected:'مزاد مباشر متعدد'
    }
  },
  methods: {
    hide() {
      this.show = false;
    },
    select(index) {
      this.show = false;
      this.selected = this.menu[index];
    }
  },
  directives: {
    ClickOutside,
  },
}
</script>
