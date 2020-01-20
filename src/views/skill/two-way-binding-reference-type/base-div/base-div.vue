<template>
  <div class="skill-base-div">
    <button @click="handleClick">base-div's button</button>
    <p>
      <b>fieldValue - {{ fieldValue }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'skill-base-div',
  model: {
    prop: 'insert',
    event: 'output'
  },
  props: {
    insert: {
      type: [Object, Array]
    }
  },
  data () {
    return {
      fieldValue: this.insert,
      fieldValueStringify: JSON.stringify(this.insert) // 保存外部传入的变量快照，将在监听器中做比较使用
    }
  },
  methods: {
    handleClick () {
      this.fieldValue = {
        v: 'k'
      }
    }
  },
  watch: {
    insert: {
      deep: true, // 深度监听
      handler (newVal) {
        const currentValue = JSON.stringify(newVal)
        // 外部传入的变量与内部变量比较
        // 不相等，内部变量方可赋值为this.value
        // * 内部变量赋值，将会触发fieldValue监听函数
        // 且此时应更新fieldValue 对象字符串快照
        if (currentValue !== this.fieldValue) {
          this.fieldValue = JSON.parse(currentValue)
          this.fieldValueStringify = currentValue
        }
      }
    },
    fieldValue: {
      deep: true, // 为什么要使用深度监听呢？
      handler (newVal) {
        // 自己改变内部变量，或者因外部变量更新手动赋值内部变量
        // 这个函数都会被触发
        // 要实现的是内部与外部变量同步，所以快照才是保存外部变量
        // 1.当外部变量改动，会先调用 watch value，此时内外部变量同步
        //   这时不需要抛出事件，否则出现死循环
        // 2.当内部变量改动，会先调用 watch fileldValue
        //   抛出事件，外部的v-model又会自动更新内部的value
        //   从而触发 watcu value
        //  （这里触发watch value了，可以回去看看1）
        //   如果你不会兜兜转，那我想你应该feel到了整个更新流程
        // **如果被兜住了，先理解外部变量的改动，再理解内部变量的改动
        const currentValue = JSON.stringify(newVal)
        if (currentValue !== this.fieldValueStringify) {
          this.$emit('output', JSON.parse(currentValue))
        }
      }
    }
  }
}
</script>
