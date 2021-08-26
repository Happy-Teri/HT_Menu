<template>
  <div class="drink-menu">
    <main class="container-fluid">
      <div class="row main"></div>
    </main>
  </div>
</template>


<script>
export default {
  name: "drink-menu",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/BubbleTeaMenu.png");
  background-size: contain;
  background-repeat: no-repeat;
  image-orientation: 90deg;
}
</style>