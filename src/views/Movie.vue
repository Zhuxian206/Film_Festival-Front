<template lang="pug">
b-container#movie
  b-overlay(:show='!upState')
    template(#overlay)
      h1 影片已下架
    b-row.mt-5
      b-col.mb-5(cols='12')
        img.w-100.ob_fit.shadow(:src='image' style="height: 450px;")
        b-col.mt-5(cols='6')
        .movie_title.mb-3
          b-icon(icon="caret-right" variant="dark")
          |  {{ name }}
        p {{ description }}
        hr.mt-5
        b-col(cols='6')
        .director_name.mt-5.mb-2
          p.mb-2.director_dec 導演簡介
          | {{ director }}
        p {{ directorDesc }}
    .cartzone
      p.mt-3.mx-2.director_name 預約觀看
      b-form-input.w-25(type='number' v-model.number='quantity' :state='quantityState' min='0')
      b-btn.m-1(variant='dark' @click='addCart') 加入預約清單
</template>
<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      image: '',
      director: '',
      directorDesc: '',
      upState: false,
      quantity: 0
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { movie: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/movies/' + this.$route.params.id)

      this.name = data.result.name
      this.description = data.result.description
      this.image = data.result.image
      this.director = data.result.director
      this.directorDesc = data.result.directorDesc
      this.upState = data.result.upState
      document.title = `${this.name} | 天空影展`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
