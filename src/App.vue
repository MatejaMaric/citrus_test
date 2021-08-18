<template>
  <Users />
  <div class="container" v-if="selectedUser">
    <div class="todo-top">
      <div class="title">
        {{ selectedUser.name.split(" ")[0].toUpperCase() }}'S TODOS
      </div>
      <Selector class="filter" @selected="filterChanged" />
    </div>
    <Todos :show="selectedFilter" />
  </div>
</template>

<script>
import Users from "@/components/Users";
import Todos from "@/components/Todos";
import Selector from "@/components/Selector";

import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { Users, Todos, Selector },
  setup() {
    const store = useStore();

    const selectedUser = computed(() => store.getters.getSelectedUser);
    const selectedFilter = ref("All");

    const filterChanged = (filter) => {
      selectedFilter.value = filter;
    };

    return {
      selectedUser,
      selectedFilter,
      filterChanged,
    };
  },
};
</script>

<style lang="scss">
$myBlack: #3b3b3b;

* {
  font-family: Arial, Helvetica, sans-serif;
  color: $myBlack;
}

.container {
  display: flex;
  flex-direction: column;

  padding: 1rem 3rem;
}

.todo-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .title {
    flex: 1;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
  .filter {
    flex: 1;
    margin-bottom: 1rem;
  }
}
</style>
