<template>
  <div class="container">
    <div class="wrapper">
      <div class="col full">
        <v-hero :hero="this.content.list_hero[0]" float="right" classes="highlight"/>
      </div>
      <div class="col">
        <v-paragraph :paragraph="this.content.list_paragraph[0]">
        </v-paragraph>
      </div>
      <div class="col">
        <v-list-icon :list="this.content.list_icon[0]"/>
      </div>
    </div>
  </div>
</template>

<script>
import aboutContent from '../../static/content/about.json'
import Hero from '@/components/Hero'
import ListIcon from '@/components/ListIcon'
import Paragraph from '@/components/Paragraph'

export default {
  name: 'About',
  data () {
    return {
      content: aboutContent
    }
  },
  components: {
    'v-hero': Hero,
    'v-list-icon': ListIcon,
    'v-paragraph': Paragraph
  }
}
</script>

<style>
</style>
