<template>
  <div class="container">
    <div class="wrapper">
      <div class="col hero">
        <v-highlight :highlight="this.content.list_highlight[0]" float="right"/>
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
import Highlight from '@/components/Highlight'
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
    'v-highlight': Highlight,
    'v-list-icon': ListIcon,
    'v-paragraph': Paragraph
  }
}
</script>

<style>
</style>
