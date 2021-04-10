<template>
  <img :src="imagePath(path)" :alt="alt">
</template>

<script>
export default {
  name: "ImageApp",
  props: {
    path: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  methods: {
    imagePath: function (path) {
      return path ? require(`@/assets/image/${path}`) : ''
    }
  }
}
</script>

<style lang="scss">
img {
  max-width: 100%;
}
</style>