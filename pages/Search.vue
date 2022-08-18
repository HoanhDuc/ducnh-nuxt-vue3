<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <p class="text-3xl font-bold font-fantasy">Search</p>
      <v-switch v-model="isDark" inset />
    </div>
    <v-text-field
      v-model="searchValue"
      color="#9E9E9E"
      outlined
      placeholder="Enter GitHub username, i.e. gaearon"
      @keyup.enter="getListUser"
    />
    <div>
      <p class="text-sm font-jost">{{ listUsers.length }} GitHub users found</p>
      <div class="row">
        <div v-for="(user, index) in listUsers" :key="index" class="col-6">
          <user-card :user="user" />
        </div>
      </div>
    </div>
    <template>
      <div class="text-center">
        <v-pagination
          v-if="listUsers.length > 0"
          v-model="page"
          :length="6"
          @input="onChangePage"
        ></v-pagination>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const isDark = ref(false);
</script>
<script lang="ts">
import UserCard from "../components/search/UserCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  layout: "search",
  data() {
    return {
      page: 1,
      searchValue: "",
      listUsers: [],
    };
  },
  methods: {
    onChangePage() {
      this.getListUser();
    },
    async getListUser() {
      const data = await this.$repository.user.getListUser({
        q: this.searchValue,
        page: this.page,
      });
      this.listUsers = data;
    },
  },
});
</script>
<style scoped lang="scss">
::v-deep {
  .v-text-field__details {
    display: none;
  }
}
.font-jost {
  font-family: Jost;
}
</style>
