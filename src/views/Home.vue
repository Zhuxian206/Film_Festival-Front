<template lang="pug">
#home
  video.w-100(autoplay='', muted='', loop='')
    source(src='../assets/pexels-naga-sumanth-l-5512078.mp4', type='video/mp4')
  .toptittle
    p 天
    p 空
    p 影
    p 展
  .floattop
    .self_title 關於影展
    p 影展是個在特定時間內播映多部電影的組織性活動，多半在一個城市或區域內的電影院及其映演空間進行，但近期也有越來越多的室外演出。 根據影展主題的不同，播映電影的年代、授權區域等都可以十分多元化，而也有的影展關注焦點是某位導演、某種具體風格，有的關注某一主題。

</template>

<script>
export default {
  data () {
    return {
      movies: []
      // letters: []
    }
  },

  async created () {
    try {
      const { data } = await this.api.get('/movies')
      this.movies = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '片單取得失敗'
      })
    }
  }
}
</script>
