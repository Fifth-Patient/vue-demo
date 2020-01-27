const cnzz = {
  src: process.env.VUE_APP_CNZZ,
  render () {
    const NODE_ENV = process.env.NODE_ENV
    if (NODE_ENV === 'production') {
      const body = document.body
      const div = document.createElement('div')
      const script = document.createElement('script')
      
      div.classList.add('none')
      script.type = 'text/javascript'
      script.src = this.src

      div.insertBefore(script, div.lastChild)
      body.insertBefore(div, body.lastChild)
    }
  }  
}

export default cnzz
