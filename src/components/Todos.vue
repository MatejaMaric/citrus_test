<template>
  <div v-for="todo in todos" :key="todo.id" class="todo">
    <input type="checkbox" :id="todo.id" v-model="todo.completed" />
    <label
      :for="todo.id"
      v-text="todo.title"
      :class="{ completed: todo.completed }"
    ></label>
  </div>
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
.todo {
  margin: 0.3rem 0;

  .completed {
    text-decoration: line-through;
  }

  label {
    margin-left: 1rem;
  }
}
</style>
