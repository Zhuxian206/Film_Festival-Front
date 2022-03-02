<template lang="pug">
#app
  b-navbar(toggleable='lg' type='dark' variant='dark')
    b-navbar-brand(to='/') 天空影展
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav.ml-auto
        //- b-nav-item(to='/#') 關於影展
        b-nav-item(to='/moviesPage') 片單欣賞
        //- b-nav-item(to='/screenings') 時間場次
        b-nav-item(to='/questions') 常見問題
        //- b-nav-item(to='/lettersPage') 最新消息
        b-nav-item(v-if="user.isLogin" to='/cart')
          |預約清單
          b-badge(variant='danger') {{ user.cart }}
        b-nav-item(v-if="!user.isLogin" to='/register') 註冊
        b-nav-item(v-if="!user.isLogin" to='/login') 登入
        b-nav-item(v-if="user.isLogin" @click="logout") 登出
        b-nav-item(v-if="user.isLogin && user.isAdmin" to='/admin') 管理中心
        b-nav-item(v-if="user.isLogin && !user.isAdmin" to='/user') 會員中心
  router-view(:key='$route.fullPath')
  .main_footer.w-100.p-5
    h4 影展資訊
    p
      | 電話: +886-90134xxxx
      br
      | 地址: 269 宜蘭縣XX鄉XX路XX號
    .copyr 版權:網站資源皆來自於網路，本站並非擁有者，僅作為練習使用。
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
