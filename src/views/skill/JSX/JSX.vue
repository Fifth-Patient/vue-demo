<script>
export default {
  name: "skill-jsx-vue",
  data() {
    return {
      type: "vue"
    };
  },
  render() {
    return (
      <p class="skill-jsx-vue">
        hello
        <b> {this.type}</b>
      </p>
    )
  }
}
</script>

<style lang="stylus">
.skill-jsx-vue {
  color: green;
}
</style>
