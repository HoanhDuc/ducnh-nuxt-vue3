<template>
  <div class="default-layout">
    <div class="child py-8 px-4">
      <div class="flex items-center justify-between mb-5">
        <p class="text-3xl font-bold font-fantasy">Search</p>
        <v-switch v-model="isDark" inset />
      </div>
      <v-text-field
        v-model="searchValue"
        color="#9E9E9E"
        outlined
        placeholder="Enter GitHub username, i.e. gaearon"
      />
      <Nuxt style="height: 76%" />
      <div class="footer row">
        <nuxt-link class="footer-item col-6" to="/search">
          <v-icon :color="colorByRouterSearch" class="mb-2">
            mdi-magnify
          </v-icon>
          <span :style="`color:${colorByRouterSearch}`">Search</span>
        </nuxt-link>
        <nuxt-link class="footer-item col-6" to="/favorite">
          <v-icon :color="colorByRouterFavorite" class="mb-2">
            mdi-heart
          </v-icon>
          <span :style="`color:${colorByRouterFavorite}`">Favorite </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  computed: {
    colorByRouterSearch() {
      if (this.$route.path === "/search") {
        return "#1976D2";
      }
      return "";
    },
    colorByRouterFavorite() {
      if (this.$route.path === "/favorite") {
        return "#1976D2";
      }
      return "";
    },
  },
  setup() {
    const isDark = ref(false);
    const searchValue = ref("");
    const routeName = ref("");
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100vh;
  background: rgb(202, 202, 202);
  .child {
    width: 30%;
    background: #fff;
    margin: auto;
    height: 100%;
  }
}
.font-fantasy {
  font-family: fantasy;
}
.footer {
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
  .footer-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
