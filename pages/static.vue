<template>
<div class=" bg-slate-50" dir="rtl" style="font-family: 'Tajawal', sans-serif;">
  <top-header></top-header>
  <main-header></main-header>
  <div class="container mx-auto px-5 mt-10 lg:flex gap-5">
    <div class=" lg:w-2/3">
      <mazaad></mazaad>
    </div>
    <div class=" lg:w-1/3">
      <my-aside></my-aside>
    </div>
  </div>
</div>
</template>

<script>
import TopHeader from '../components/static/TopHeader';
import MainHeader from '../components/static/MainHeader';
import Mazaad from '../components/static/Mazaad.vue';
import MyAside from '../components/static/Aside.vue';
export default {
  name: "Static",
  components: {
    TopHeader,
    MainHeader,
    Mazaad,
    MyAside
  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },

};
</script>
