<template>
  <div>
    <div class="mt-2 gap-x-1 gap-y-2 grid grid-cols-2">
      <div
        :class="`rounded w-96 justify-self-end bg-slate-${odd?'200':'200'} py-3 px-6 text-center`"
      >
        {{ item.key }}
      </div>
      <div :class="`rounded w-96 bg-slate-${odd?'200':'200'} py-3 px-6 text-center`">
        {{ item.value }}
      </div>
    </div>
    <data-row v-for="(subItem, index) in item.child" :key="index *.091 + .0889" :item="subItem" :odd="index % 2 == 0 "></data-row>
  </div>
</template>
<script>
export default {
  name: "DataRow",
  props: {
    item: {
      type: Object,
      require: true,
    },
    odd: {
      type: Boolean,
      require: true,
    },
  },
};
</script>
