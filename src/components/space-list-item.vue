<template>
  <div class="space-list-item">
    
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">空间主题</h3>
            <div>介绍</div>
          </div>
        </v-card-title>
        <v-layout align-center justify-end row fill-height>
          <v-card-actions>
            <v-btn flat color="white">关注</v-btn>
            <v-btn color="deep-purple">
              <router-link to="/space">参加</router-link>
              </v-btn>  
          </v-card-actions>
        </v-layout>
      </v-card>
    
  </div>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>

<style>
.space-list-item {
  margin-bottom: 10px;
  text-align: left;
}

.space-list-item .v-card-actions a {
  color: #fff;
  
}

</style>
