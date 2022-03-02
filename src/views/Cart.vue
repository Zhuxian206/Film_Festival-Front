<template lang="pug">
b-container#cart
  b-table.my-5(:items='movies' :fields='fields' :tbody-tr-class="rowClass")
    template(#cell(image)='data')
      img(v-if='data.item.movie.image' :src='data.item.movie.image' style='height: 50px')
    template(#cell(name)='data')
      | {{ data.item.movie.name }}
    template(#cell(action)='data')
      b-form-spinbutton(v-model='data.item.quantity' min="1" inline @input='updateCart(data.index, data.item.quantity)')
      | &emsp;
      b-icon(icon="x-circle-fill" @click='updateCart(data.index, 0)')
  b-btn.m-5.w-25(variant='dark' @click='checkout' :disabled='movies.length === 0') 確認預約
  .pushfooter
</template>

<script>
export default {
  data () {
    return {
      movies: [],
      fields: [
        { key: 'image', label: '' },
        { key: 'name', label: '片名' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { movie: this.movies[index].movie._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.movies.splice(index, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改預約清單失敗'
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '預約失敗'
        })
      }
    },
    rowClass (item, type) {
      if (!item || type !== 'row') return
      return !item.movie.upState ? 'bg-danger' : ''
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.movies = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得預約清單失敗'
      })
    }
  }
}
</script>
