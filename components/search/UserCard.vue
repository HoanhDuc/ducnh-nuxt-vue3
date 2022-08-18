<template>
  <div class="card-container p-2">
    <div class="row">
      <div class="image col-4 rounded-lg">
        <img :src="user.avatar_url" alt="" class="rounded-lg" />
      </div>
      <div class="user-info col-6">
        <span class="font-bold">{{ user.login }}</span>
        <span>{{ onGetUserDetail(user.followers_url, "Followers") }}</span>
        <span>{{ onGetUserDetail(user.followings_url, "Followings") }}</span>
      </div>
      <v-icon
        color="rgb(255, 0, 0)"
        size="medium"
        class="col-1 justify-between items-start"
        >mdi-heart</v-icon
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
const props = defineProps({
  user: {
    type: Object,
    default: () => {},
  },
});
</script>
<script lang="ts">
export default defineComponent({
  methods: {
    onGetUserDetail(url, name) {
      this.$repository.user.getUserFollows(url).then((res) => {
        console.log(res);
        return `${res} ${name}`
      });
    },
  },
});
</script>

<style scoped lang="scss">
.card-container {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  height: 80px;
  border-radius: 10px;
  .image {
    width: 80px !important;
  }
}
</style>
