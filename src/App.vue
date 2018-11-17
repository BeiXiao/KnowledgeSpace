<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase center">
        <span>Knowledge</span>
        <span class="font-weight-light"> Space</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar> -->
    <v-toolbar dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>
        <span>Knowledge</span>
        <span class="font-weight-light"> Space</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content light>
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
