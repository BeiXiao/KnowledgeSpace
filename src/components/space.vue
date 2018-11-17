<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">智能学习</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div class="space-content-text">
            <span class="time">今天</span><br>
            <span>#人工智能 #AI</span><br>
            <span>应试教育对现代大学中的影响，有哪些你知道...</span>
          </div>
        </v-card-title>
        <v-container>
          <div class="space-star">
              <v-spacer>推荐热度</v-spacer>
              <v-icon>star</v-icon>
              <v-icon>star</v-icon>
              <v-icon>star</v-icon>
              <v-icon>star_border</v-icon>
              <v-icon>star_border</v-icon>
            </div>
        </v-container>
        <v-container class="space-avatars" justify-start={true}>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-container>
        <v-card-actions>
          <v-btn flat color="deep-purple">查看详情</v-btn>
          <v-btn flat color="purple lighten-4" class="btn-join">
            <router-link to="/space" color="deep-purple">参加</router-link>
          </v-btn>  
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      bannerItems: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
 
    })
  }
</script>

<style>
.space-banner {
   height: 300px !important;
}
.space-content-text {
  text-align: left;
}

.space-star {
  text-align: left;
}

.space-star .theme--light.v-icon {
  color: #D81B60;
}

.space-avatars {
  text-align: left;
}
</style>
