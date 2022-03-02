<template lang="pug">
#userdata
  b-card.m-3.w-25(header='帳號')
    p.card-text.mt-2
      | {{user.account}}
  b-card.m-3.w-25(header='信箱')
    p.card-text.mt-2
      | {{user.email}}
  .pushfooter
</template>

<script>
export default {
  data () {
    return {
      users: [],
      modalSubmitting: false,
      form: {
        account: '',
        email: '',
        realName: '',
        cellPhone: ''
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.account = data.result
      this.email = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }
  }
}
</script>
