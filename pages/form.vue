<template>
  <div
    class="
      container
      m-auto
      py-5
      px-10
      bg-slate-50
      shadow-md
      my-10
      min-h-fit
      border-solid border-stone-100
      rounded
      border
    "
  >
    <!-- main categories -->
    <label id="listbox-label" class="block text-sm font-medium text-gray-700"
      >Main Categories <span class="text-red-600">*</span>
    </label>
    <div
      v-click-outside="hide"

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
            @focusin="handleCategoryFocus "
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
              focus:ring-rose-500
              focus:outline-none
              focus:ring-1
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
        v-if="showCategories && filteredCategories.length > 0"
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
          @click.stop="select(item.id)"
          v-for="(item, index) in filteredCategories"
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
    <!-- subCategories -->
    <label id="listbox-label" class="block text-sm font-medium text-gray-700"
      >Sub Categories <span class="text-red-600">*</span>
    </label>
    <div
      v-click-outside="subHide"

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
            v-model="subSearch"
            @focusin="handleSubCategoryFocus"
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
          <!-- Heroicon name: mini/chevron-up-down -->
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

      <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <ul
        v-if="showSubCategories && filteredSubCategories.length > 0"
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
        <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      -->
        <li
          @click="subSelect(index)"
          v-for="(item, index) in filteredSubCategories"
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
            <!-- <img src="" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" /> -->
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
          </div>

          <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        -->
          <span
            v-if="subSelected ? subSelected.id == item.id : false"
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
    <!-- properties -->

    <property
      v-for="(item, index) in properties"
      :key="item.id * index * 0.021 + 0.02189"
      :title="item.name"
      :arr="item.options"
      :child="child[index]"
    ></property>
    <div class="my-10 flex place-content-center">
      <button
        :disabled="!selected || !subSelected"
        @click="submit"
        class="
          disabled:opacity-50
          disabled:hover:border-transparent
          shadow-sm
          hover:shadow-lg
          transition-all
          py-5
          px-10
          rounded-full
          bg-gradient-to-r
          from-red-500
          to-rose-800
          border
          bg-red-400
          border-solid border-transparent
          hover:border-red-400
          text-white
        "
      >
        submit
      </button>
    </div>
    <div v-if="showData">
      <div  class="mt-10 gap-x-1 gap-y-2 grid grid-cols-2 ">
        <div class=" rounded w-96 justify-self-end bg-slate-200 py-3 px-6 text-center">{{ "Main Category" }}</div>
        <div class=" rounded w-96 bg-slate-200 py-3 px-6 text-center">{{ selected.name }}</div>
        <div class=" rounded w-96 justify-self-end bg-slate-200 py-3 px-6 text-center">{{ "Sub Category" }}</div>
        <div class=" rounded w-96 bg-slate-200 py-3 px-6 text-center">{{ subSelected.name }}</div>
      </div>
      <data-row v-for="(subItem, index) in child" :key="index *.0921 + .00889" :item="subItem" :odd="index % 2 == 0 "></data-row>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import Property from "~/components/SearchableList";
import DataRow from "~/components/DataRow";
export default {
  name: "Form",
  components: {
    Property,
    DataRow
  },
  data() {
    return {
      showData:false,
      showCategories: false,
      showSubCategories: false,
      selected: null,
      subSelected: null,
      child: [],
      properties: [],
      categories: [],
      search: "",
      subSearch: "",
    };
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredSubCategories() {
      return this.selected
        ? this.selected.children.filter((subCategory) =>
            subCategory.name
              .toLowerCase()
              .includes(this.subSearch.toLowerCase())
          )
        : [];
    },
  },
  methods: {
    handleCategoryFocus(){
      this.showCategories = true
      this.search = ""
    },
    handleSubCategoryFocus(){
      this.showSubCategories = true
      this.subSearch = ""
    },
    hide() {
      this.showCategories = false;
      this.search = this.selected? this.selected.name :''
    },
    subHide() {
      this.showSubCategories = false;
      this.subSearch = this.subSelected? this.subSelected.name :''
    },
    select(id) {
      console.log(id);
      this.showCategories = false;
      this.selected =
      this.categories.filter((category) =>
        category.id == id
      )[0];
      this.search = this.selected.name;
      this.child =[]
      this.properties = []
      this.subSelected = null
      this.subSearch = ''
    },
    subSelect(index) {
      this.showSubCategories = false;
      this.subSelected = this.filteredSubCategories[index];
      const id = this.subSelected.id;
      this.subSearch = this.filteredSubCategories[index].name;
      this.child =[]
      this.properties = []
      this.$axios.$get("api/properties?cat=" + id).then((res) => {
        this.properties = res.data;
        console.log(res.data, "sub select");
        this.properties.forEach((element) => {
          this.child.push({
            key: null,
            value: null,
            child: [],
          });
        });
      });
    },
    submit() {
      console.log(this.child);
      this.showData = true
    },
  },
  beforeMount() {
    this.$axios.$get("api/get_all_cats").then((res) => {
      this.categories = res.data.categories;
      console.log(res.data.categories);
    });
  },
  directives: {
    ClickOutside,
  },
};
</script>
