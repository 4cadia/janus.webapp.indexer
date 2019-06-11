<template>
  <div class="container container--home">
    <div class="col" v-for="(block, index) in this.content" :key="index">
      <v-hero v-if="block['type']=='list_hero'" :hero="block['content'][0]" float="right" classes="full-content">
        <v-list-actions/>
      </v-hero>
      <v-list-icon v-if="block['type']=='list_icon'" :list="block['content'][0]"/>
      <v-paragraph v-if="block['type']=='list_paragraph'" :paragraph="block['content'][0]" id="documentation"/>
    </div>
  </div>
</template>

<script>
import contentService from '../api/contentService'
import Hero from '@/components/Hero'
import ListIcon from '@/components/ListIcon'
import ListActions from '@/components/ListActions'
import Paragraph from '@/components/Paragraph'

export default {
  name: 'Home',
  data () {
    return {
      content: [],
      title: 'Janus Indexer'
    }
  },
  components: {
    'v-hero': Hero,
    'v-list-icon': ListIcon,
    'v-list-actions': ListActions,
    'v-paragraph': Paragraph
  },
  mounted: function () {
    contentService('home').then((response) => {
      this.content = response.data
    })
  }
}
</script>

<style scoped>
</style>
