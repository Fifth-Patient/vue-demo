<template>
  <div class="skill-lifecycle-process">
    <p>{{ msg }}</p>
    <p v-text="msg">{{ msg }}</p>
    <p><button @click="handleClick">update</button></p>
    <p><button @click="hahdleDestroy">destroy</button></p>
  </div>
</template>

<script>
export default {
  name: 'skill-lifecycle-process',
  props: {
    insertContent: {
      type: String,
      default: 'insertConteint'
    }
  },
  data () {
    return {
      msg: 'Hey Jude!'
    }
  },
  computed: {
    reverseMsg () {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    reversedMsg () {
      return this.msg.split('').reverse().join('')
    },
    handleClick () {
      this.msg = 'Hello World!'
    },
    hahdleDestroy () {
      this.$destroy()
    }
  },
  watch: {
    msg () {
      console.log(this.msg)
    }
  },
  beforeCreate () {
    console.log("%c%s", "color:orangeRed", 'beforeCreate--实例创建前状态')
    console.log("%c%s", "color:skyblue", "$props  :" + this.$props)
    console.log("%c%s", "color:skyblue", "$data  :" + this.$data)
    console.log("%c%s", "color:skyblue", "computed :" + this.reverseMsg)
    console.log("%c%s", "color:skyblue", "methods  :" + this.reversedMsg)
    // this.msg = 'msg1'
  },
  created ()  {
    console.log("%c%s", "color:orangeRed", 'created--实例创建完成状态')
    console.log("%c%s", "color:skyblue", "$props  :" + this.$props)
    console.log("%c%s", "color:skyblue", "$data  :" + this.$data)
    console.log("%c%s", "color:skyblue", "computed :" + this.reverseMsg)
    console.log("%c%s", "color:skyblue", "methods  :" + this.reversedMsg())
    // this.msg = 'msg2'
  },
  beforeMount () {
    console.log("%c%s", "color:orangeRed", 'beforeMount--挂载之前的状态')
    console.log("%c%s", "color:skyblue", "$el  :",this.$el)
  },
  mounted () {
    console.log("%c%s", "color:orangeRed", 'mounted--已经挂载的状态')
    console.log("%c%s", "color:skyblue", "$el  :", this.$el)
  },
  beforeUpdate () {
    console.log("%c%s", "color:orangeRed", 'beforeUpdate--数据更新前的状态')
    console.log("%c%s", "color:skyblue", "message  :" + this.msg)
    console.log(this.$el)
    console.log("%c%s", "color:skyblue", "el  :" + this.$el.innerHTML)
    console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.querySelector('.skill-lifecycle-process').innerHTML)
  },
  updated () {
    console.log("%c%s", "color:orangeRed", 'updated--数据更新完成时状态')
    console.log("%c%s", "color:skyblue", "message  :" + this.msg)
    console.log(this.$el);
    console.log("%c%s", "color:skyblue", "el  :" + this.$el.innerHTML)
    console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.querySelector('.skill-lifecycle-process').innerHTML)
  },
  beforeDestroy () {
    console.log("%c%s", "color:orangeRed", 'beforeDestroy-- vue实例销毁前的状态')
    console.log("%c%s", "color:skyblue", "el  :", this.$el)
    console.log("%c%s", "color:skyblue", "data  :" + this.$data)
    console.log("%c%s", "color:skyblue", "computed :" + this.reverseMsg)
    console.log("%c%s", "color:skyblue", "methods  :" + this.reversedMsg)
  },
  destroyed () {
    console.log("%c%s", "color:orangeRed", 'destroyed-- vue实例销毁完成时调用')
    console.log("%c%s", "color:skyblue", "el  :", this.$el)
    console.log("%c%s", "color:skyblue", "data  :" + this.$data)
    console.log("%c%s", "color:skyblue", "computed :" + this.reverseMsg)
    console.log("%c%s", "color:skyblue", "methods  :" + this.reversedMsg)
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  }
}
</script>
