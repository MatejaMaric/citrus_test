<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    v-text="todo.title"
    :class="{ completed: todo.completed }"
  ></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    show: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const todos = computed(() => {
      switch (props.show) {
        case "All":
          return store.getters.getAllTodosForSelectedUser;
        case "Completed":
          return store.getters.getCompletedTodosForSelectedUser;
        case "Uncompleted":
          return store.getters.getUncompletedTodosForSelectedUser;
      }
      return [];
    });

    return { todos };
  },
};
</script>

<style lang="scss">
.completed {
  text-decoration: line-through;
}
</style>
