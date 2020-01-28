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
      <p>
        hello
        <b> {this.type}</b>
      </p>
    )
  }
}
</script>
