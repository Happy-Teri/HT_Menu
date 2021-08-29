<template>
  <div class="lunch-specials-build">
    <header class="container-fluid">
      <div class="row">
        <div class="col-8">Lunch Specials</div>
        <div class="col-4">Drinks</div>
      </div>
    </header>
    <main class="container-fluid">
      <!--TODO Need to jusitfy space around on y-axis -->
      <div class="row main d-flex align-items-center">
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <h3>Food</h3>
            </div>
            <div class="col-12">
              <img src="//placehold.it/200x200" alt="" />
            </div>
            <div class="col-12">
              <h3>Food</h3>
            </div>
            <div class="col-12">
              <img src="//placehold.it/200x200" alt="" />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <h1>HappyBowl</h1>
            </div>
            <div class="col-12">
              <img src="//placehold.it/300x300" alt="" />
            </div>
            <div class="col-12">
              <h3>meat and prices</h3>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <h3>Fountain Drinks</h3>
            </div>
            <div class="col-12">
              <img src="//placehold.it/300x200" alt="" />
            </div>
            <div class="col-12">
              <h4>Fountain Drinks Prices</h4>
            </div>
            <div class="col-12">
              <h3>Bottled Drinks & prices</h3>
            </div>
            <div class="col-12">
              <h3>
                Bubble Tea
                <p>|see side menu|</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  name: "lunch-specials-build",
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
  height: 95vh;
}
</style>