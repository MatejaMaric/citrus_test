<template>
  <div class="buttons">
    <div
      v-for="btn in buttons"
      :key="btn"
      v-text="btn"
      class="button"
      :class="{ selected: btn === selectedButton }"
      @click="clickedButton(btn)"
    ></div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  emits: ["selected"],
  setup(props, context) {
    const selectedButton = ref(props.values?.[0]);

    const clickedButton = (value) => {
      selectedButton.value = value;
      context.emit("selected", value);
    };

    return {
      buttons: props.values,
      selectedButton,
      clickedButton,
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
