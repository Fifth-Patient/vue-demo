<template>
  <div class="two-way-binding-base-type">
    <p>inputValue: {{ inputValue }}</p>
    <p>
      html-input: <input type="text" v-model="inputValue">
    </p>
    <p>
      base-input: <base-input v-model="inputValue"></base-input>
    </p>
  </div>
</template>

<script>
import BaseInput from './base-input'

export default {
  name: 'skill-two-way-binding-base-type',
  components: {
    BaseInput
  },
  data () {
    return {
      inputValue: 'default-input'
    }
  }
}
</script>
