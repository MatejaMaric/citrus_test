<template>
  <div
    v-for="btn in buttons"
    :key="btn"
    v-text="btn"
    :class="{ selected: btn === selectedButton }"
    @click="clickedButton(btn)"
  ></div>
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

<style lang="scss">
.selected {
  color: red;
}
</style>
