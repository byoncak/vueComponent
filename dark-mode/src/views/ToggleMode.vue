<template>
  <div
    class="toggle-view"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode,
    }"
  >
    <ToggleButton />
  </div>
</template>

<script>
import ToggleButton from "@/components/Toggle.vue";

export default {
  name: "ToggleView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  components: { ToggleButton },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";

* {
  transition: background 0.8s ease-in-out;
}

.toggle-view {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.light-background {
  color: $black;
  background: whitesmoke;
}
.dark-background {
  color: whitesmoke;
  background: #2e2e4d;
}
</style>
