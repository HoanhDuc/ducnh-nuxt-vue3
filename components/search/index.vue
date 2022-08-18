<template>
  <div>
    <div v-for="(user, index) in userList" :key="index">
      <user-card  :user="user" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userList: {
    type: Array,
    default: () => [],
  },
});
</script>

<style></style>
