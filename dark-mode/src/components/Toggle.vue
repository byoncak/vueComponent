<template>
  <div class="toggle-container">
    <div class="toggle-button" v-on:click="toggleDarkMode()">
      <div
        class="toggle"
        :class="this.$store.state.isDarkMode ? 'right' : 'left'"
      >
        <div
          class="circle"
          :class="this.$store.state.isDarkMode ? 'dark' : 'light'"
        >
          <img
            id="moon"
            v-show="this.$store.state.isDarkMode"
            src="@/assets/moon-icon.svg"
          />
          <img
            id="sun"
            v-show="!this.$store.state.isDarkMode"
            src="@/assets/sun-icon.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",

  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle-button {
  display: flex;
  width: 72px;
  height: 36px;
  margin-left: 2em;
  cursor: pointer;
}

.toggle.left {
  display: flex;
  justify-content: center;
  width: 72px;
  height: 36px;
  align-items: center;
  box-shadow: inset 0px 0px 8px -4px #2e2e4d;
  border-radius: 91px;
  border: 0px;
  background-color: #2e2e4d;
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.toggle.right {
  display: flex;
  justify-content: center;
  width: 72px;
  height: 36px;
  align-items: center;
  box-shadow: inset 0px 0px 8px -4px #2e2e4d;
  border-radius: 91px;
  border: 0px;
  background-color: #f5f5f5;
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

img {
  display: flex;
  user-select: none;
}

#moon {
  display: flex;
  height: 80%;
}

#sun {
  display: flex;
  height: 60%;
}

.circle.dark {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  border-radius: 100%;
  background-color: #2e2e4d;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 8px rgba(46, 46, 77, 0.6);
  transition: background-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: absolute;
  transform: translateX(75%);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.circle.light {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  margin-left: 4px;
  border-radius: 100%;
  background-color: #f5f5f5;
  mix-blend-mode: normal;
  transition: background-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: absolute;
  transform: translateX(-80%);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0px 4px 8px rgba(#f5f5f5, 0.6);
}
</style>
