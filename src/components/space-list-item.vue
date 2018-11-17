<template>
  <div class="space-list-item">
    <v-flex xs12>
      <v-card color="purple" class="white--text">
        <v-layout row>
          <v-flex xs8>
            <v-card-title space-list-item-text primary-title>
              <div>
                <div class="headline">智能学习</div>
                <div>应试教育对现代大学中的影响，有哪些你知道...</div>
                <div>本周六</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs4>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              height="160px"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
        <v-divider light style="border-color:#AB47BC"></v-divider>
        <v-card-actions>
          <router-link to="/space" color="white" class="btn-show-more">
            <v-btn flat style="font-weight: 500; color: #fff">查看详情</v-btn>
          </router-link>
          <v-btn flat color="white" class="btn-join">
            参加
          </v-btn>  
        </v-card-actions>

        <!-- <v-card-actions class="pa-3">
          Rate this album
          <v-spacer></v-spacer>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
          <v-icon>star_border</v-icon>
        </v-card-actions> -->
      </v-card>
    </v-flex>
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
  margin-bottom: 12px;
  text-align: left;
}

.space-list-item-text div {
  font-size: 12px !important;
  margin-top: 2px;
}

.btn-join {
  background:#D1C4E9 !important;
  border-radius: 4px; 
}

.btn-show-more a, .btn-join a,  {
  text-decoration: none !important;
}

.btn-join a {
  color: #6200EE;
}

.btn-join:hover {
  background:#EDE7F6 !important;
}

</style>
