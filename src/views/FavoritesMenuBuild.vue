<template>
  <div class="favorites-menu-build">
    <header class="container-fluid">header</header>
    <main class="container-fluid">
      <div class="row d-flex align-items-center main">
        <div class="col-4">
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
          <div class="row">
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
            <div class="col-6">text</div>
          </div>
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
          <div class="row">
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
            <div class="col-6">text</div>
          </div>
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
          <div class="row">
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
            <div class="col-6">text</div>
          </div>
          <div class="row">
            <div class="col-6">text</div>
            <div class="col-6"><img src="//placehold.it/200x200" alt="" /></div>
          </div>
        </div>
      </div>
    </main>
    <footer class="container-fluid">footer</footer>
  </div>
</template>


<script>
export default {
  name: "favorites-menu-build",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
* {
  border: 1px solid red;
}
header {
  height: 5vh;
}
.main {
  height: 90vh;
}
footer {
  height: 5vh;
  position: fixed;
  bottom: 0;
}
</style>