<template>
  <div class="buttons">
    <div
      class="button"
      :class="{ selected: 'All' === selectedButton }"
      @click="clickedButton('All')"
    >
      All ({{ AllTodosLength }})
    </div>

    <div
      class="button"
      :class="{ selected: 'Completed' === selectedButton }"
      @click="clickedButton('Completed')"
    >
      Completed ({{ CompletedTodosLength }})
    </div>

    <div
      class="button"
      :class="{ selected: 'Uncompleted' === selectedButton }"
      @click="clickedButton('Uncompleted')"
    >
      Uncompleted ({{ UncompletedTodosLength }})
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["selected"],
  setup(props, context) {
    const store = useStore();
    const selectedButton = ref("All");

    const clickedButton = (value) => {
      selectedButton.value = value;
      context.emit("selected", value);
    };

    const AllTodosLength = computed(
      () => store.getters.getAllTodosForSelectedUser?.length
    );
    const CompletedTodosLength = computed(
      () => store.getters.getCompletedTodosForSelectedUser?.length
    );
    const UncompletedTodosLength = computed(
      () => store.getters.getUncompletedTodosForSelectedUser?.length
    );

    return {
      selectedButton,
      clickedButton,
      AllTodosLength,
      CompletedTodosLength,
      UncompletedTodosLength,
    };
  },
};
</script>

<style scoped lang="scss">
$myYellow: #f5df4e;
$myGray: #c7c8ca;

.buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 200px;
  height: 50px;

  border: 2px solid $myGray;
  border-radius: 30px;

  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;

  margin: 0.3rem;

  &.selected {
    background-color: #f5df4e;
    border: 2px solid transparent;
  }
}
</style>
