<template>
  <div class="moviecard">
    <router-link :to='"/movie/" + movie._id'>
      <img class="mcard_img" :src="movie.image" style="width:100%; height:300px" >
          <h3> {{ movie.name }}</h3>
      <p>導演 | {{ movie.director }}</p>
    </router-link>

  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
