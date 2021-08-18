<template>
  <label
    v-for="todo in todos"
    :key="todo.id"
    :for="'todo__checkbox--' + todo.id"
    class="todo"
  >
    <input
      type="checkbox"
      :id="'todo__checkbox--' + todo.id"
      v-model="todo.completed"
    />

    <div class="todo__box" :class="{ selected: todo.completed }"></div>

    <div
      class="todo__text"
      v-text="todo.title"
      :class="{ selected: todo.completed }"
    ></div>
  </label>
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

<style scoped lang="scss">
$myBlack: #949398;
$myBlue: #89acd2;

.todo {
  display: flex;
  align-items: center;

  cursor: pointer;
  margin: 1rem 0;

  input[type="checkbox"] {
    display: none;
  }

  .todo__box {
    height: 2rem;
    width: 2rem;
    border: 2px solid $myBlack;
    border-radius: 6px;
    margin-right: 1rem;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &.selected::after {
      content: "\2714";
      color: $myBlue;
    }
  }

  .todo__text {
    font-size: 1.3rem;
    &.selected {
      text-decoration: line-through;
    }
  }
}
</style>
