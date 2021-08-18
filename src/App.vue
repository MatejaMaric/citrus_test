<template>
  <Users />
  <div v-if="selectedUser">
    <div>{{ selectedUser.name.split(" ")[0].toUpperCase() }}'S TODOS</div>
  </div>
</template>

<script>
import Users from "@/components/Users";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { Users },
  setup() {
    const store = useStore();

    const selectedUser = computed(() => store.getters.getSelectedUser);

    return { selectedUser };
  },
};
</script>

<style lang="scss"></style>
