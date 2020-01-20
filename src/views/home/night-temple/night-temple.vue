<template>
  <div class="night-temple">
    <div class="poetry">
      <h1 class="title">夜宿山寺</h1>
      <p class="author">[唐] 李白</p>
      <div class="container">
        <p class="verse">危楼高百尺，手可摘星辰。</p>
        <p class="verse">不敢高声语，恐惊天上人。</p>
      </div>
    </div>
    <div class="view-link">
      <div v-for="(item, index) of VIEWLINKLIST" :key="index" class="link-block">
        <a :href="item.link" :target="item.target" class="link">{{ item.label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
// 定义视图链接列表
const VIEWLINKLIST = [
  {
    label: 'skill',
    link: '/skill',
    target: '_self'
  },
  {
    label: 'demo',
    link: '/demo',
    target: '_self'
  }
]

export default {
  name: 'night-temple',
  data () {
    return {
      VIEWLINKLIST
    }
  }
}
</script>

<style lang="stylus">
@keyframes poetry-moveup {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-60%);
  } 
}

@keyframes view-link-show {
  from {
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    width atuo
    transform: translateX(-50%);
    transform: scale(0, 0);
  }
  80% {
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    width auto
    transform: translateX(-50%);
    transform: scale(1.3, 1.3);
  }
  to {
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    transform: scale(1, 1);
  }
}

.night-temple {
  width: 100%;
  text-align: center;
  .poetry {
    transform: translateY(-60%);
    animation: poetry-moveup 1.5s;
    .title {
      padding: 5px 0;
    }
    .author {
      margin: 3px 0 5px;
    }
    .container {
      padding-top: 5px;
    }
  }
  .view-link {
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap wrap;
    justify-content: center;
    max-width: wrapper-max-width;
    margin: 0 auto;
    animation: view-link-show 1.5s;
    .link-block {
      flex: 0 1 25%;
      height: 25px;
      line-height 25px;
    }
  }
}
</style>