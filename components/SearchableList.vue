<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium text-gray-700"
      >{{ title }}
    </label>
    <div
      v-click-outside="hide"
      @focusin="show = true"
      class="relative mt-1 mb-5"
    >
      <button
        type="button"
        class="relative w-full"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span class="flex items-center">
          <input
            v-model="search"
            class="
              relative
              w-full
              cursor-default
              rounded-md
              border border-gray-300
              bg-white
              py-2
              pl-3
              pr-10
              text-left
              shadow-sm
              focus:border-rose-500
              focus:outline-none
              focus:ring-1
              focus:ring-rose-500
              sm:text-sm
            "
            placeholder="search"
          />
        </span>
        <span
          class="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            ml-3
            flex
            items-center
            pr-2
          "
        >
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <ul
        v-if="show && list.length > 0"
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
          v-for="(item, index) in filteredArr"
          :key="item.id * index"
          class="
            text-gray-900
            relative
            cursor-default
            select-none
            py-2
            pl-3
            pr-9
          "
          id="listbox-option-0"
          role="option"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
          </div>
          <span
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
            <!-- Heroicon name: mini/check -->
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
          </span>
        </li>

        <!-- More items... -->
      </ul>
    </div>
    <input
      v-if="selected ? selected.name == 'other' : false"
      v-model="userInput"
      class="
        mb-5
        relative
        w-full
        cursor-default
        rounded-md
        border border-gray-300
        bg-white
        py-2
        pl-3
        pr-10
        text-left
        shadow-sm
        focus:border-rose-500
        focus:outline-none
        focus:ring-1
        focus:ring-rose-500
        sm:text-sm
      "
      type="text"
      placeholder="user input"
    />
    <!-- <h3 v-if="selected? selected.child:false">has child</h3> -->
    <!-- <searchable-list-child
      v-if="selected ? selected.child : false"
      :id="selected.id"
    ></searchable-list-child> -->
    <searchable-list :child="localData.child[index]" class="ml-5" v-for="(item, index) in childProperties" :key="item.id*index *.021 + .02189" :title="item.name"  :arr="item.options"></searchable-list>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "SearchableList",
  props: {
    title: {
      type: String,
      required: true,
    },
    child:{
      type:Object,
      required:true
    },
    arr: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      localData:this.child,
      userInput: null,
      show: false,
      search: "",
      childProperties: [],
      selected: null,
      list: [...this.arr, { id: 90009, name: "other" }],
    };
  },

  methods: {
    hide() {
      this.show = false;
    },
    select(index) {
      this.show = false;
      this.selected = this.filteredArr[index];
      if (this.selected.child) {
        const that = this
        this.$axios.$get("api/get-options-child/" + this.selected.id).then((res) => {
          res.data.forEach((element) => {
          that.localData.child.push({
            key: null,
            value: null,
            child: [],
          });
        });
          this.childProperties = res.data
          console.log(res.data);
        });
      }
      console.log(this.selected);
      this.search = this.filteredArr[index].name;
      this.localData.value = this.selected.name
      this.localData.key = this.title
    },
  },
  watch:{
    userInput(val){
      this.localData.value = val
    }
  },
  computed: {
    filteredArr() {
      return this.list.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
