<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">

      <h2>Recommended</h2>

      <div class="recommended">

        <!-- <div v-for="(product, i) in inventory.slice(0,3)" :key="i" class="card"> -->
        <div v-for="(product, i) in inventory.slice(0,3)" :key="product.id" class="card">
          <div class="card-title">
            {{ product.name }}
          </div>
          <div class="card-body">
            <i class="icofont-10x icofont-{{ product.icon }}"></i>
            <form>
              <div class="row">
                <div class="cell">
                  <label>Type:</label>
                </div>
                <div class="cell">
                  <em>{{ product.type }}</em>
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Price:</label>
                </div>
                <div class="cell">
                  ${{ product.price.USD }}
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Quantity:</label>
                </div>
                <div class="cell">
                  <!-- <input type="number" v-model.number="inventory[i].quantity"> -->
                  <input type="number" v-model.number="product.quantity">
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button @click="addToCart(product.name, i)" class="btn btn-light">
              Add to cart
            </button>
          </div>
        </div>

        <!-- <div class="card">
          <div class="card-title">
            Pineapples
          </div>
          <div class="card-body">
            <i class="icofont-10x icofont-pineapple"></i>
            <form>
              <div class="row">
                <div class="cell">
                  <label>Type:</label>
                </div>
                <div class="cell">
                  <em>Fruit</em>
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Price:</label>
                </div>
                <div class="cell">
                  $1.62
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Quantity:</label>
                </div>
                <div class="cell">
                  <input type="number" v-model="inventory.pineapples">
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn-light">Add to cart</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            Cherries
          </div>
          <div class="card-body">
            <i class="icofont-10x icofont-cherry"></i>
            <form>
              <div class="row">
                <div class="cell">
                  <label>Type:</label>
                </div>
                <div class="cell">
                  <em>Fruit</em>
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Price:</label>
                </div>
                <div class="cell">
                  $1.04
                </div>
              </div>
              <div class="row">
                <div class="cell">
                  <label>Quantity:</label>
                </div>
                <div class="cell">
                  <input type="number" v-model="inventory.cherries">
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn-light">Add to cart</button>
          </div>
        </div> -->

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: ['inventory'],
  components: {}
}
</script>
