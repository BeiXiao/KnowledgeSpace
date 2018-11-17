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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'KnowledgeSpace',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
