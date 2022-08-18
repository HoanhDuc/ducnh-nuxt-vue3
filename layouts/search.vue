<template>
  <div class="default-layout">
    <div class="child py-8 px-4 relative overflow-hidden">
      <Nuxt  />
      <div class="footer row">
        <nuxt-link class="footer-item col-6" to="/search">
          <v-icon :color="colorTab.searchTab" class="mb-2">
            mdi-magnify
          </v-icon>
          <span :style="`color:${colorTab.searchTab}`">Search</span>
        </nuxt-link>
        <nuxt-link class="footer-item col-6" to="/favorite">
          <v-icon :color="colorTab.favoriteTab" class="mb-2">
            mdi-heart
          </v-icon>
          <span :style="`color:${colorTab.favoriteTab}`">Favorite</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    colorTab() {
      if (this.$route.path === "/search") {
        return {
          searchTab: "#1976D2",
          favoriteTab: "rgba(0, 0, 0, 0.6)",
        };
      }
      return {
        searchTab: "rgba(0, 0, 0, 0.6)",
        favoriteTab: "#1976D2",
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.default-layout {
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
  position: absolute;
  bottom: 0;
  width: 98.5%;
  background: #fff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
  .footer-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
