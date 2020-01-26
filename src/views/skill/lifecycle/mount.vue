<template>
  <iframe :src="mountHtmlSrc" frameborder="0"></iframe>
</template>

<script>

export default {
  name: 'skill-lifecycyle-mount',
  computed: {
    mountHtmlSrc () {
      const type = this.$route.query.type
      return `/skill-lifecycle-${type}.html`
    }
  }
}
</script>
