<template>
  <Users />
  <div v-if="selectedUser">
    <div>{{ selectedUser.name.split(" ")[0].toUpperCase() }}'S TODOS</div>
    <Selector :values="filterButtons" @selected="filterChanged" />
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

    const filterButtons = ref(["All", "Completed", "Uncompleted"]);
    const selectedFilter = ref(filterButtons.value[0]);

    const filterChanged = (filter) => {
      selectedFilter.value = filter;
    };

    return {
      selectedUser,
      filterButtons,
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
</style>
