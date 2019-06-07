<template>
  <div :class="`hero float--${float} ${classes}`" >
    <div class="hero_content">
      <div class="content content--text">
        <h1 class="title" v-if="hero.title" v-html="hero.title"></h1>
        <div class="text" v-if="hero.text" v-html="hero.text"></div>
        <slot></slot>
      </div>
      <div class="content content--image" v-if="hero.image">
        <img :src="hero.image" alt="">
      </div>
    </div>
    <div class="hero_background">
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
  overflow: hidden;
}
.hero .hero_background,
.hero .hero_background:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.hero .hero_background {
  background: #202020;
  overflow: hidden;
  transform: skew(0deg, -3deg) translateY(-7%);
}
.hero .hero_background:after {
  opacity: .4;
  filter: blur(2px) brightness(70%);
  background-image: url('../assets/images/hero.jpg');
  background-size: cover;
  background-color: #202020;
  background-repeat: no-repeat;
}
.hero.gray .hero_background {
  transform: none;
}
.hero.gray .hero_background:after {
  background: url('../assets/images/box_pattern.png') repeat;
  filter: brightness(70%);
}
.hero_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  padding: 8% 0;
  position: relative;
  z-index: 2;
}
.hero .content--text {
  color: white;
  text-align: left;
  width: 50%;
}
.hero .content--text .title {
  color: white;
  margin-top: 0;
}
.hero .content--image,
.hero .content--text {
  vertical-align: middle;
}
.hero .content--image {
  width: 40vw;
  max-width: 800px;
}
.hero .content--image img {
  width: 100%;
}
@media (max-width: 768px) {
  .hero {
    max-height: 100%;
    height: auto;
  }
  .hero .hero_background {
    -webkit-transform: skew(0deg, -3deg) translateY(-6%);
    transform: skew(0deg, -3deg) translateY(-6%);
  }
  .hero_content {
    padding: 80px 0 40px 0;
  }
}
</style>
