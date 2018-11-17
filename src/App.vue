<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase center">
        <span>Knowledge</span>
        <span class="font-weight-light"> Space</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <index/>
    </v-content>
  </v-app>
</template>

<script>
import Index from './components/index'

export default {
  name: 'KnowledgeSpace',
  components: {
    Index
  },
  data () {
    return {
      //
    }
  }
}
</script>
