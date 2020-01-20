<template>
  <div class="skill-two-way-binding-reference-type">
    <p>
      <button @click="handleClick"> parent-comonent's button</button>
    </p>
    <p>
      <base-div v-model="formValue" @output="handleOutput"></base-div>
    </p>
    <control-panel
      position="right">
      formValue: {{ formValue }}
    </control-panel>
  </div>
</template>

<script>
import ControlPanel from '@/components/control-panel'
import BaseDiv from './base-div'

export default {
  name: 'skill-two-way-binding-reference-type',
  components: {
    ControlPanel,
    BaseDiv
  },
  data () {
    return {
      formValue: {
        k: 'v'
      },
      isK: true
    }
  },
  methods: {
    handleClick () {
      if (this.isK) {
        this.formValue = {
          key: 'value'
        }
        this.isK = false
      } else {
        this.formValue = {
          k: 'v'
        }
        this.isK = true
      }
    },
    handleOutput ($event) {
      console.log($event)
    }
  }
}
</script>
