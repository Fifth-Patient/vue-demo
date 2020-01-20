<template>
  <input type="text" v-model="fieldValue">
</template>

<script>
export default {
  name: 'base-input',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fieldValue: this.value // 初始化赋值
    }
  },
  watch: {
    value (newVal) {
      this.fieldValue = newVal // 监听props（外部）更新，赋值给data（内部）
    },
    fieldValue () {
      this.$emit('input', this.fieldValue) // data（内部）更新，抛出到外部
    }
  }
}
</script>
