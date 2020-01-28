import styled from 'vue-styled-components';

const StyledP = styled.p`
  color: wheat;
`

export default {
  name: 'skill-jsx-js',
  data() {
    return {
      type: 'js'
    }
  },
  render() {
    return <StyledP class="skill-jsx-js">hello <b>{this.type}</b></StyledP>
  }
}
