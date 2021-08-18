<template>
  <div>
    <div
      v-for="user in users"
      :key="user.id"
      v-text="user.name"
      :class="{ selected: selectedUser?.id === user.id }"
      @click="selectUser(user.id)"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const users = ref();

    onMounted(async () => {
      await store.dispatch("pullUsersAndTodos");
      users.value = store.getters.getAllUsers;
    });

    const selectedUser = computed(() => store.getters.getSelectedUser);
    const selectUser = (id) => store.commit("selectUser", id);

    return {
      users,
      selectedUser,
      selectUser,
    };
  },
};
</script>

<style lang="scss">
.selected {
  color: red;
}
</style>
