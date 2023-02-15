<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <nuxt-link class="m-5 bg-white rounded shadow py-2 px-8" to="/form">form</nuxt-link>
      <nuxt-link class="m-5 bg-white rounded shadow py-2 px-8" to="/static">static</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
