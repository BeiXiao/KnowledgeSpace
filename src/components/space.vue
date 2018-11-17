<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <!-- 顶部轮播图 -->
     <v-carousel class="space-banner">
        <v-carousel-item
          v-for="(item,i) in bannerItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    <!-- 顶部轮播图 End -->
    </v-layout>

    <H1>
      title
    </H1>
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
</style>
