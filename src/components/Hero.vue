<template>
  <div :class="'hero float--' + float + ' ' + classes" >
    <div class="hero_background">
      <div class="hero_content">
        <div class="content content--text">
          <h1 class="title" v-html="hero.title"></h1>
          <div class="text" v-html="hero.text"></div>
          <slot></slot>
        </div>
        <div class="content content--image">
          <img :src="hero.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
    }
  },
  props: {
    hero: {
      type: Object
    },
    float: {
      type: String
    },
    classes: {
      type: String
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.hero {
  position: relative;
  min-height: 20vh;
  height: 42vw;
  overflow: hidden;
}
.hero .hero_background {
  z-index: -1;
  height: 100%;
  -webkit-transform: skew(0deg, -3deg) translateY(-9%);
  transform: skew(0deg, -3deg) translateY(-9%);
  /* background-color: var(--color-navy); */
  background-color: #202020;
}
.hero .hero_background:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/images/hero.jpg') no-repeat;
  background-size: cover;
  filter: blur(1px) brightness(70%);
  opacity: .4;
}
.hero.highlight .hero_background:before {
  background: url('../assets/images/box_pattern.png') repeat;
  filter: brightness(70%);
}
.hero .hero_content {
  transform: skew(0deg, 3deg);
}
.hero_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hero .content--text {
  margin-left: 60px;
  color: white;
  text-align: left;
  width: 50%;
}
.hero .content--text .title {
  font-size: 3vw;
  color: white;
  margin-top: 0;
}
.hero .content--text .text {
  font-size: 1.5vw;
}
.hero .content--image,
.hero .content--text {
  vertical-align: middle;
}
.hero .content--image {
  width: 40vw;
}
.hero .content--image img {
  width: 100%;
}
</style>
