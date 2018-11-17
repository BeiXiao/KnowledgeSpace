<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <v-flex>
      <!-- 搜索筛选 -->
      <v-flex xs12 sm8 d-flex>
        <v-select
          :items="filter.topics"
          label="主题"
        ></v-select>
        <v-select
          :items="filter.topics"
          label="主题"
        ></v-select>
        <v-select
          :items="filter.topics"
          label="主题"
        ></v-select>
      </v-flex>
      <!-- 搜索筛选 End -->
      <!-- 空间列表 -->
      <SpaceList
      >
      </SpaceList>
      <!-- 空间列表 End-->
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SpaceList from './space-list'

  export default {
    components: {
      SpaceList
    },
    data: () => ({
      filter: {
        topics: ['主题一', '主题二', '主题三']
      },
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>
