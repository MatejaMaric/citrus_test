<template>
  <div class="container">
    <div class="title-text">PICK A USER</div>
    <div class="buttons">
      <div
        v-for="user in users"
        :key="user.id"
        v-text="user.name"
        class="button"
        :class="{ selected: selectedUser?.id === user.id }"
        @click="selectUser(user.id)"
      ></div>
    </div>
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

<style scoped lang="scss">
$myYellow: #f5df4e;
$myBlue: #89acd2;
$myWhite: #f0f0f0;

.container {
  background-color: $myYellow;

  display: flex;
  flex-direction: column;

  padding: 3rem;
}

.title-text {
  font-size: 2rem;
  font-weight: bold;

  margin-bottom: 1rem;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1.6rem;
}

.button {
  background-color: $myWhite;
  cursor: pointer;
  border-radius: 10px;

  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;

  padding: 2rem;

  &.selected {
    color: $myYellow;
    background-color: $myBlue;
  }
}
</style>
