<template>
  <div>
    <div v-for="user in users" :key="user.id" v-text="user.name"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const users = ref();

    onMounted(async () => {
      await store.dispatch("pullUsersAndTodos");
      users.value = store.getters.getAllUsers;
    });

    return {
      users,
    };
  },
};
</script>

<style lang="scss"></style>
