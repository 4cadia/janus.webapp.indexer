<template>
  <div :class="'highlight float--' + float">
    <div class="highlight_background">
      <div class="highlight_content">
        <div class="content content--text">
          <h1 class="title" v-html="highlight.title"></h1>
          <div class="text" v-html="highlight.text"></div>
          <ul class="link menu">
            <li class="menu-item">
              <router-link to="/indexer">Try out the indexer </router-link>
            </li>
            <li class="menu-item">
              <a href="#documentation">Take the tutorial</a>
            </li>
          </ul>
        </div>
        <div class="content content--image">
          <img :src="highlight.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlight',
  data () {
    return {}
  },
  filters: {
    capitalize: item => {
      return item.toUpperCase()
    }
  },
  props: {
    highlight: {
      type: Object
    },
    float: {
      type: String
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.highlight {
  position: relative;
  min-height: 20vh;
  height: 40vw;
  overflow: hidden;
  max-height: 90vh;
}
.highlight_background {
  z-index: -1;
  height: 100%;
  -webkit-transform: skew(0deg, -3deg) translateY(-9%);
  transform: skew(0deg, -3deg) translateY(-9%);;
  background-color: #202020;
}
.highlight_background:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/images/box_pattern.png');
  filter: brightness(70%);
}
.highlight_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: skew(0deg, 3deg);
}
.highlight .content--text {
  margin-left: 60px;
  color: white;
  text-align: left;
  width: 50%;
}
.highlight .content--text .title {
  font-size: 3vw;
  color: white;
  margin-top: 0;
}
.highlight .content--text .text {
  font-size: 1.5vw;
}
.highlight .content--image,
.highlight .content--text {
  vertical-align: middle;
}
.highlight .content--image {
  width: 40vw;
}
.highlight .content--image img {
  width: 100%;
}
.highlight .content--text .menu-item {
  border-radius: 10px;
  margin: 40px 40px 0 0;
  display: inline-block;
}
.highlight .content--text .menu-item a {
  font-size: 1.4vw;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-cyan);
}
.highlight .content--text .menu-item a:hover {
  color: white;
}
</style>
